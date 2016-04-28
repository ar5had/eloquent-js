function countChars(str, char){
  if(char == undefined)
    char = "B";
  var count = 0;
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i) == char)
      count++;
  }
  return count;
}

 console.log(countChars("BBC"));
 console.log(countChars("adfafsdjffffsdkdffff", "f"));
