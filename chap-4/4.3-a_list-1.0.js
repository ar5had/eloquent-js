function arrayToList(arr){
  var i = arr.length-1;
  var list = {
    value : arr[i],
    rest : null
  };
  while(i > 0){
    i--;
    list = {
      value : arr[i],
      rest : list
    };
  }
  return list;
}

function listToArray(list){
  var arr = [];
  arr.push(list.value);
  while(list.rest != null){
    list = list.rest;
    arr.push(list.value);
  }
  return arr;
}

function prepend(elem, list){
  var newList = {
    value : elem,
    rest : list
  };
  return newList;
}

function nth(list, pos){
  for(var i = 0; list != null; i++, list = list.rest){
    if(i == pos)
      return list.value;
  }
  return undefined;
}

console.log(arrayToList([1,2,3,4,5]));// {value: 1, rest: {value: 2, rest: {value: 3, …}}}
console.log(listToArray({value:1,rest:{value:2,rest:{value:3,rest:null}}}));// [1,2,3]
console.log(nth({value:1,rest:{value:2,rest:{value:3,rest:null}}},2));// 3
console.log(nth({value:1,rest:{value:2,rest:{value:3,rest:null}}},3));// undefined
console.log(prepend(10, prepend(20, null)));// {value: 10, rest: {value: 20, rest: null}}
