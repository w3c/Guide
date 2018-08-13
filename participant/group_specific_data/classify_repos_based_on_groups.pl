#!/usr/bin/perl

#use strict;
#use warnings;

my $repo = "";
my $url = "";

my $json = "w3c-github.json";
my $map = "group.map";

#my %Map = {};
my ($id, $group) = ("", "");

#my %Group = {};

### load group map
open(MAP, "$map") || die "err: $!\n";
while (<MAP>) {
  chomp;
  #print STDERR "LINE: $_\n";
  ($id, $group) = split(/[\s]+/, $_, 2);
  #print STDERR "MAP: ${id}: ${group}\n";
  $Map{$id} = $group;
}
close(MAP);

### load JSON
open(JSON, "$json") || die "err: $!\n";
while (<JSON>) {
  chomp;
  if (/^\{/) {
    next;
  }

  #print "$_\n";
  if (/"(.*)": \{/) {
    $repo = $1;

  } elsif (/"github_url": "(.*)\/"/) {
    $url = $1;

    ### get info
    my $gid = "";
    my $url_master = "${url}/master/w3c.json";
    my $url_ghpages = "${url}/gh-pages/w3c.json";
    my $result = "";
  
    $url_master =~ s/github\.com/raw.githubusercontent.com/;
    $url_ghpages =~ s/github\.com/raw.githubusercontent.com/;

    # try ghpages first
    $result = `curl -i ${url_ghpages} 2> /dev/null`;
    print STDERR "$url_ghpages\n";
    print STDERR "$result\n";
    if ($result =~ /404 Not Found/) {

      # try master as well
      $result = `curl -i ${url_master} 2> /dev/null`;
      print STDERR "$url_master\n";
      print STDERR "$result\n";
      if ($result =~ /404 Not Found/) {

        # there is no w3c.json in the repo
        #print "${repo}: none\n";
        push(@{$Group{"none"}}, $repo);
        next;
      }
    }

    # there is a w3c.json in the repo and the group has been identified
    $result =~ s/\["//;
    $result =~ s/"\]//;
    $result =~ s/,//g;
    print STDERR "OK: $result\n";
    if ($result =~ /"group":[\s]*([0-9]+)/) {
      $gid = $1;
      $group = $Map{$gid};
      #print "${repo}: ${group}\n";
      push(@{$Group{$group}}, $repo);
    }
  }
}
close(JSON);

### get classified results
foreach my $g (sort keys %Group) {
  if ($g eq "") {
    print " * No group id ideitified - maybe closed groups\n";
  } else {
    print " * $g\n";
  }

  foreach my $i (0 .. $#{$Group{$g}}) {
    print "   - w3c/$Group{$g}[$i]\n";
  }
}
