function zeroPad(n){
  var no = String(n);
  while(no.length < 3)
    no= "0" + no;
  return no;
}

function showMarks(maths, physics, chemistry){
    console.log(zeroPad(maths) + " - Maths marks"); // 001
    console.log(zeroPad(physics) + " - Physics marks"); // 055
    console.log(zeroPad(chemistry) + " - Chemistry marks"); // 100
}

showMarks(1, 55, 100);
