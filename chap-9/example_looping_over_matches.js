var input = "A string with 3 numbers in it ... 42 and 88.";
var number = /\b\d+\b/g;
while(match = number.exec(input))
  console.log("Match: " + match,"Index: " + match.index + "\n");
