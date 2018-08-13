#!/usr/bin/perl

my $in = "group.map.by_ash-nazg";

open(IN, $in) || die "$in: $!\n";
while (<IN>) {
  chomp;
  @Line = split(/[\s]+/);
  print "$Line[$#Line] ";
  for ($i = 1; $i < ($#Line - 1); $i++) {
    print "$Line[$i] ";
  }
  print "$Line[$i]\n";
}
close(IN);
    
