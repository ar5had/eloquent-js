var input = "A string with 3 numbers in it ... 42 and 88.";
var number = /\b\d+\b/g;
// for looping we should use exec and for getting all possible results we should use match method.
while(match = number.exec(input))
  console.log("Match: " + match,"Index: " + match.index + "\n");
