let numbers = [5, 9, 3, 19, 70, 8,2, 35, 27];
let menor = Number.POSITIVE_INFINITY;
for(let obj of numbers)
{
    if(menor > obj)
    {
        menor = obj;
    }
}
console.log(menor);
