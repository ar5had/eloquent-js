// example one

var s = "the cia and fbi";
console.log(s.replace(/\b(cia|fbi)\b/g, function(str){
	return str.toUpperCase();
}));

// example two

var stock = "1 pineapple, 2 oranges, 3 apples";
// arguments of minusOne are simply the result similar to the array elems given by exec method
function minusOne(match, no, fruit) {
	no = Number(no) - 1;
  	if (no === 1)
      fruit = fruit.slice(0, fruit.length - 1);
  	else if (no === 0)
      no = "no";
  	return no + " " + fruit;
}
// here /w is used therefore "," will not be picked by regex
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
