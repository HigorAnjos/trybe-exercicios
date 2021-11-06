let n = 7;
let arr = [];

for(let i =0; i<n; i++)
{
    arr[i] =" ";
}
let i = Math.floor(n/2);
arr[i] = "*";
let aux = "";

for(let i =0; i<n; i++)
{
    aux += arr[i];
}
console.log(aux);

for(let i=Math.floor(n/2)-1; i >-1 ; i--)
{
    arr[i] = "*"
    arr[n - i -1] = "*";

    aux = "";
    for(let j=0; j<n; j++)
    {
        aux += arr[j];

    }
    console.log(aux);
}
