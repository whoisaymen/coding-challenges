Solution: longest_palindrome
https://www.codewars.com/kata/54bb6f887e5a80180900046b/javascript
let longestPalindrome=function(s){
    let max = 0;
    for (let i = 0; i < s.length; i++){
      for (let j = 1; j <= s.length; j++){
        if (s.slice(i,j) === s.slice(i,j).split('').reverse().join('')){
          if (max < s.slice(i,j).length){
            max = s.slice(i,j).length;
          }
        } else {
          continue;
        }
      }
    }
    return max;
  }