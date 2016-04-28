function wrapper(n){
  var localvar = n;
  return function(){
    return localvar;
  };
}

var x = wrapper(1);
var y = wrapper(2);
console.log(x());// 1
console.log(y());// 2
