
const custo = 5;
const venda = 305;

if(custo>0 && venda>0)
{
    let lucro = venda*1000 - (venda*1000*20/100) - 1000*custo;
    console.log("Lucro:" + lucro);
}else
{
    console.log("Valores informados invalidos ");
}