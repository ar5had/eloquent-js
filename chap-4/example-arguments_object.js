function doingTheFancyWay(){
  var myArr = [];
  for(var i= 0; i <= arguments.length; i++){
    myArr[i] = arguments[i];
  }
  console.log(myArr.join(""));
}

doingTheFancyWay("one" ,"two" ,"three");
