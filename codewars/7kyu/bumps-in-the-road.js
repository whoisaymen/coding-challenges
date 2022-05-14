Solution: Bumps in the Road
https://www.codewars.com/kata/57ed30dde7728215300005fa/
function bump(x){
    return x.split('_').join('').length <= 15 ? 'Woohoo!' : 'Car Dead';
  }