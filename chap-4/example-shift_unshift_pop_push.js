function check(n){
  var arr = [];
  console.log(arr.join(" "));
  arr.push(n);
  console.log(arr.join(" "));
  arr.shift();
  console.log(arr.join(" "));
  arr.unshift(n+1);
  arr.unshift(n+2);
  console.log(arr.join(" "));
}

check(10);
