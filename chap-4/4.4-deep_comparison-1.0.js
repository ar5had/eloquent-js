function deepEqual(obj1, obj2){
  if(typeof obj1 == "object" && typeof obj2 == "object" && obj1 != null && obj2 != null){
    var length1 = 0, length2 = 0;
    for(var prop in obj1)
      length1++;
    for(var prop in obj2)
      if(!prop in obj1 || !deepEqual(obj1[prop], obj2[prop]))
        return false;
  }

  else if(obj1 !== obj2)
    return false;

  return true;// if false is not returned surely the two arguments will be deep equal.
}

var obj1 = {
  name : {
    first_name : "Arshad",
    last_name : "Khan"
  },
  dob : {
    day : 9,
    month : "april",
    year : "1997"
  },
  loves_programming : true
};

var obj2 = {
  name : {
    first_name : "Arshad",
    last_name : "Khan"
  },
  dob : {
    day : 9,
    month : "april",
    year : "1997"
  },
  loves_programming : true
};

var obj3 = {
  name : {
    first_name : "Arshad",
    last_name : "Khan"
  },
  dob : {
    day : 10,
    month : "april",
    year : "1997"
  },
  loves_programming : true
};

var obj4 = {
  name : {
    first_name : "Arshad",
    last_name : "Khan"
  },
  dob : {
    day : 9,
    month : "april",
    year : "1997"
  },
  loves_programming : false
};

var obj5 = obj1;

console.log("obj1 is equal to obj2 :", deepEqual(obj1,obj2)); //true
console.log("obj1 is equal to obj3 :", deepEqual(obj1,obj3)); //false
console.log("obj1 is equal to obj4 :", deepEqual(obj1,obj4)); //false
console.log("obj1 is equal to obj5 :", deepEqual(obj1,obj5)); //true
console.log("obj1 is equal to null :", deepEqual(obj1,null)); //false
