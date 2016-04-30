function reverseArray(arr){
  var newArr = [];
  for(var i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}

function reverseArrayInPlace(arr){
  for(var i = 0; i <= (arr.length-1)/2; i++){
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;

  }
  return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

//for printing a reverse array, side effects are more efficient.
//for using reverse array in program, we need to use a pure function i.e., actually do the reversing.
//reverseArrayInPlace is more efficient than reverseArray method.
