let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
maior = Number.NEGATIVE_INFINITY;
for(let obj of numbers)
{
    if(obj > maior)
    {
        maior = obj;
    }
}
console.log(maior);
