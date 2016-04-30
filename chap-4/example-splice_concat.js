function rmCharAt(str, index){
  console.log(str.slice(0, index).concat(str.slice(index+1)));
}

rmCharAt("Arshad Khan", 2);
