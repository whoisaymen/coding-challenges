Solution: Multiplication table
multiplicationTable = function(size) {
    let arr = [];
    let arr2 = [];
    for (let i = 1; i <= size; i++){
      for (let j = 1; j <= size; j++){
        arr.push(i*j);
      }
      arr2.push(arr)
      arr = [];
    }
    return arr2;
  }