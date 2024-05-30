//Implement a function named `fibonacci` that accepts an argument `n`,

function fibnocci(n)
{
    let i=0,j=1;
    let sum=0;
    if(n<0)
        console.error("Negative number is not allowed")
    else
       while(sum<=n)
    {
       console.log(sum);
       i=j;
       j=sum;
       sum =i+j;

    }
    

}

fibnocci(20);