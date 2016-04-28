// Puzzle: Start from the number 1 and repeatedly either add 5 or multiply
// by 3 until you get the target no that is given by user and display all
// the steps.

function puzzleSolution(target){
  function result(start, steps){
    if(start == target)
      return steps;
    else if(start > target)
      return null;
    else
      return result(start + 5, "(" + steps + " + 5)") ||
             result(start * 3, "(" + steps + " * 3)");
  }
   return result(1, "1");
}

console.log(puzzleSolution(15));
