let arr = [];

for(let i=0; i<25; i++)
{
    arr[i]=i+1;
}
console.log(arr);

for(let obj of arr)
{
    console.log(obj/2);
}