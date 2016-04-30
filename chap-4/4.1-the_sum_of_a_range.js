function range(start, end, step){
  if(step == undefined)
    step = 1;
  var arr = [];

  if(((start <= end) && step >= 0) || ((start >= end) && step <= 0)){

    if((start <= end) && step >= 0){
      for(var i = start, j = 0; i <= end; i += step, j++){
          arr[j] = i;
      }
    }

    else{
      for(var i = start, j = 0; i >= end; i += step, j++){
          arr[j] = i;
      }
    }
    return arr;
  }
  //error case
  else {
    return undefined;
  }
}
function sum(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

var arr = range(1, 10);
console.log(arr);
console.log(sum(arr));
console.log(range(1, 10, 2));
console.log(range(1, 10, -2));//error case
console.log(range(10, 1, -2));
console.log(range(10, 1, 2));// error case
