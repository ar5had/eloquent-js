var ancestry = JSON.parse(ANCESTRY_FILE);

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null)
      return defaultValue;
    else
      return f(person, valueFor(byName[person.mother]),
                       valueFor(byName[person.father]));
  }
  return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == "Pauwels van Haverbeke")
    return 1;
  else
    return (fromMother + fromFather) / 2;
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var avgCenAge = {};
ancestry.forEach(function(person){
  if (avgCenAge[Math.ceil(person.died / 100)] == undefined) {

    var century = Math.ceil(person.died / 100);

    avgCenAge[century] = average(ancestry.filter(function(newPerson){

      if(Math.ceil(newPerson.died / 100) == century)

        return (newPerson.died - newPerson.born);

    	}).map(function(anotherPerson){

      		return anotherPerson.died - anotherPerson.born;

    	})
  );

  }//ifEnds

});//forEachEnds

for(var century in avgCenAge)
  console.log("Century-", century, "Average age-", avgCenAge[century]);
