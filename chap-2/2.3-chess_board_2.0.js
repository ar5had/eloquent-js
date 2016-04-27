var size = 8;
var output = "";

for(var i = 1; i <= size; i++){
  for(var j = 1; j <= size; j++){

    if((i + j) % 2 == 0){
      output += " ";
    }
    else{
      output += "#";
    }

  }
output += "\n";
}

console.log(output);
