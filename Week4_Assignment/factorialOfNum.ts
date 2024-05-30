//function named `factorial` that accepts an argument `n`,which is non-Negative number

function factorial(num)
{
    let fact =1;
   if(num<0)
     console.log("Factorial cannot be calculated for a negative number")

   else
     for(let i=1;i<=num;i++)
         fact = fact *i
       
   return(fact)    
}

let num =10;
let result = factorial(num)
console.log(`Factorial of 5 is ${result}`)