//const nums = [2, 4, 7, 8, 11, 14];

const nums =[2,4,7,8,11,14,10]
const target = 18;
let results =[];//Initialize an empty array `results`.

function sum(nums,target)
{
  for(let i=0;i<nums.length;i++)//Use a nested loop to iterate over `nums` array elements.
  {
    for(let j=i+1;j<nums.length;j++)
        {   
            let first =nums[i]
            let sec = nums[j];
            let s= first + sec
            if(s===target)//Check if the sum of two distinct elements equals `target`.
                {
                    results.push(i)//add their indices to `results`.
                    results.push(j)


                }
        }

  }
  
  return(results);//return indices

}
let res = sum(nums,target)

console.log(`Pair of indices whose sum equal to ${target} is ${res}`)
