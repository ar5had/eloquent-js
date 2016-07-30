(function(exports) {
	var names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  exports.name = function(no) { return names[no]; };
  exports.number = function(name) { return names.indexOf(name); };
})(this.month =  {});

console.log(month.name(2));
// → March
console.log(month.number("Nov"));
// → 10
