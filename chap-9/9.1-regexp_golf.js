// Fill in the regular expressions

verify(/ca(r|t)/,
       ["my car", "bad cats"],
       ["camper", "high art"]);
verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.,;:]/,
       ["bad punctuation ."],
       ["escape the dot"]);
// \. contains whitespace that's why using \w
verify(/\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);
// the whitespace will also be a valid block so it should be excluded while testing otherwise all String having whitespace will pass  
verify(/[^e\s]+/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);
function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
