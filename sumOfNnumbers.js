let num=20
let sum =0;
function sumOfNNumbers(num)
{
  for(let i=1;i<=num;i++)
    {
        sum+=i
    }
    return (sum);

}

let s= sumOfNNumbers(num)
console.log(`sum of ${num} is ${s}`);

