#!/usr/bin/perl

my $in = "group.map";

open(IN, $in) || die "$in: $!\n";
while (<IN>) {
  chomp;
  @Line = split(/[\s]+/);
  for ($i = 0; $i < $#Line; $i++) {
    print "$Line[$i] ";
  }
  print "$Line[$i]\n";
}
close(IN);
    
