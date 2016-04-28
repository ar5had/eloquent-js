function multiplier(factor){
  return function(number){
    return (factor * number);
  };
}

var result = multiplier(5);
console.log(result(4));//20
