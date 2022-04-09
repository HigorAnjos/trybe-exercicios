let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contadorImpares = 0;
for(let obj of numbers)
{
    if(obj%2!=0)
    {
        contadorImpares++;
    }
}
console.log(contadorImpares);