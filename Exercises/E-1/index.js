/**
 * Q => Write a JavaScript function , which will take an integer n as parameter, 
 * if n is divisible by 3 return 'Deja', if n is divisible by 5 return  'Vu', 
 * If it is divisible by 15, return 'DejaVu'. 
 * Call this function for to get output of numbers from 1 to 100.
 */

 function evaluate(n){
  if(n % 15 === 0){
    return 'DejaVu'
  }
  else if(n % 5 === 0){
    return 'Vu'
  }
  else if(n % 3 === 0){
    return 'Deja'
  }
  else return ''
 }

 for(let i=1;i<=100;i++){
  console.log(i,evaluate(i))
 }

 