function min(m, n){
  if(m < n)
    return m;
// No need to check whether they are equal because the no returned will be same in
// either case.
  else
    return n;
}

console.log("Minimum of 3 and 7 is " + min(3, 7));   // 3
console.log("Minimum of 7 and 77 is " + min(7, 77)); // 7
console.log("Minimum of 8 and 8 is " + min(8, 8));   // 8
console.log("Minimum of 8 and -8 is " + min(8, -8)); //-8
