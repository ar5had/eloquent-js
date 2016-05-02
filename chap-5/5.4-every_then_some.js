function every(arr, f){
  for(var elem in arr){
    if(!f(arr[elem]))
      return false;
  }
  return true;
}

function some(arr, f){
  for(var elem in arr){
    if(f(arr[elem]))
      return true;
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
