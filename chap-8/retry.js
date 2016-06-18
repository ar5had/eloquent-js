'use strict';

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnitFailure";

function MultiplicatorUnitFailure(msg){

  this.message = msg;
  this.stack = (new Error()).stack;

}

function randomTF(){

  return Math.random()  <= .5 ;

}

function primitiveMultiply(a, b){

  while(true){

    try{
      if(randomTF)
        return a * b;
      else
        throw new MultiplicatorUnitFailure();
    }

    catch(e){
      if(e instanceof MultiplicatorUnitFailure)
        console.log("MultiplicatorUnitFailure !!!");
      else
        throw e;
    }

  }//ends while loop

}//ends primitiveMultiply function


console.log(primitiveMultiply(8, 8));
// → 64
