#!/usr/bin/perl

#my $in = "/home/ashimura/public_html/www.w3.org/WWW/Member/Mail/Overview.html";
my $in = "Member_Group.html";

open(IN, "$in") || die "error: $!\n";
while (<IN>) {
  chomp;
  if (/<a class="toggler group-([0-9]+)">(.*)<\/a>/) {
    print "$1   $2\n";
  }
}
close(In);

