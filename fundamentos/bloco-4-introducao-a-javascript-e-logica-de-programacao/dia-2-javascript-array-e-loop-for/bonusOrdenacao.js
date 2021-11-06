let array = [5, 3, 2, 4, 7, 1, 0, 6];

for (let i = 1; i < array.length; i += 1)
{
    for (let secondi = 0; secondi < i; secondi += 1) 
    {
        if (array[i] < array[secondi]) 
        {
            let position = array[i];
            array[i] = array[secondi];
            array[secondi] = position;
        }
    }
}
/*Crescente*/
console.log(array);

/*Decrecente*/
for(i =0; i<array.length/2; i++)
{
    let aux = array[array.length-i-1];
    array[array.length-i-1] = array[i]; 
    array[i] = aux;
}
console.log(array);