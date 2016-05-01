function arrayToList(arr){
  var list = null;
  for(var i = arr.length - 1; i >= 0; i--)
    list = {value:arr[i], rest:list};
  return list;
}

function listToArray(list){
  var arr = [];
  for(; list; list = list.rest )
    arr.push(list.value);
  return arr;
}

function prepend(elem, list){
  return({value: elem, rest: list});
}

function nth(list, pos){
  if(!list)
    return undefined;
  else if(pos == 0)
    return list.value;
  else
    return nth(list.rest,pos-1);
}

console.log(arrayToList([1,2,3,4,5]));// {value: 1, rest: {value: 2, rest: {value: 3, …}}}
console.log(listToArray({value:1,rest:{value:2,rest:{value:3,rest:null}}}));// [1,2,3]
console.log(nth({value:1,rest:{value:2,rest:{value:3,rest:null}}},2));// 3
console.log(nth({value:1,rest:{value:2,rest:{value:3,rest:null}}},3));// undefined
console.log(prepend(10, prepend(20, null)));// {value: 10, rest: {value: 20, rest: null}}
