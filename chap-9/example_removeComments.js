function removeComments(code){
  	// ? makes this regex non-greedy hence smaller matches are given priority
	return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log(removeComments("1 + /* 2 + 3 */ 3"));
console.log(removeComments("c = 100; // assignment"));
console.log(removeComments("1 /* 2 */ + /* 4 */ 3"));
