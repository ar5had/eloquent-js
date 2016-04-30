// to be completed
function deepEqual(obj1, obj2){
  var propInObj1 = 0, propInObj2 = 0;
  if( ( (typeof obj1) == (typeof obj2) ) && ( obj1 != null || obj2 != null ) ){
    for(var property in obj1)
      propInObj1++;
    for(var property in obj1)
      propInObj2++;

    if( (typeof obj1) == object & propInObj2 == propInObj1){
      for(var prop in obj1){
        if(typeof prop == object && prop in obj2)
          deepEqual(obj1.prop, obj2.prop);
        else if (typeof prop == object && prop in obj2)
          return obj1 === obj2;
        else
          return false;
      }
    }
    else
      return obj1 === obj2;
  }
  else
    return false;

  return true;
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
