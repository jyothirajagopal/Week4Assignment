 const array =[2,2,4,3,2,7,4]
 let count =0;//Initialize count to 0.

 let ele = 2;

 //Loop through the array `array`.
 for(let i=0;i<array.length;i++)
    {
        if(ele === array[i])
            count++  //increment the count
    }
 
    console.log(`Count  of occurenec of ${ele} in the array is ${count}`)