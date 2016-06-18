function logFive(seq){
    for(var i = 0; i <= 4 && !seq.end; i++){
      console.log(seq.next());
    }
}

function ArraySeq(arr){
  this.end = !Boolean(arr);
  this.inner = arr;
  this.current = 0;
}

ArraySeq.prototype.next = function(){
    this.current++;
    // for null and undefined values given into constructor
    if(this.current >= this.inner.length){
      this.end = true;
    }

    return this.inner[this.current-1];

};

function RangeSeq(start, last){
  this.end = !( Boolean(start) && Boolean(last) );
  this.current = start;
  this.last = last;
}

RangeSeq.prototype.next = function(){
  this.current++;
  if(this.current >= this.last)
    this.end = true;
  return this.current -1;
}



logFive(new ArraySeq([1, 2]));
// 1
// 2
logFive(new ArraySeq());
// *nothing will print*
logFive(new ArraySeq([null, undefined]));
// Note that null and undefined are also valid array members
// null
// undefined
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
logFive(new RangeSeq(100));
// this test case is to filter those situation when user have given complete arguments
// or no arguments at all.
// *nothing will print*
logFive(new RangeSeq());
// this test case is to filter those situation when user have given complete arguments
// or no arguments at all.
// *nothing will print*
