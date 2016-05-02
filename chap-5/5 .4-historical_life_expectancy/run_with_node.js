// load dependencies
require("./code/load")("code/ancestry.js", "code/chapter/historical_life_expectancy.js", "code/intro.js");

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);
