let n = 5;
let linha = [];

for(let i=0; i<n; i++)
{
    linha[i] = " ";
}
for(let i=0; i<n; i++)
{
    linha[linha.length-i-1] = "*";
    let aux = "";
    for(let j=0; j<n; j++)
    {
        aux += linha[j];

    }
    console.log(aux);
}
