
const porcentagem = 75;
if(porcentagem >=0 && porcentagem<=100)
{
    if(porcentagem>= 90){ console.log("A"); }else
    if(porcentagem>= 80){ console.log("B"); }else
    if(porcentagem>= 70){ console.log("C"); }else
    if(porcentagem>= 60){ console.log("D"); }else
    if(porcentagem>= 50){ console.log("E"); }else
    if(porcentagem < 50){ console.log("F"); }
}
else
{
    console.log("Fora do intervalo 0-100");
}
