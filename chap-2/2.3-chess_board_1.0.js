var size = 8;
var output = "";

for(var i = 1; i <= size; i++){

  if(i % 2 == 1)
    for(var j = 1; j <= size; j++){
        if(j % 2 == 0)
          output += "#";
      	else
          output += " ";
  	}
  else
    for(var j = 1; j <= size; j++){
    	if(j % 2 == 1)
          output += "#";
      	else
          output += " ";
   }

  console.log(output);
  output="";
}
