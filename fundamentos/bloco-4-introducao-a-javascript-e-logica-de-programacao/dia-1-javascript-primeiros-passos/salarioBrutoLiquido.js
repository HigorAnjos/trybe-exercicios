
let salario = 3000;
let INSS = 0;
let IR = 0;
let parcelaIR = 0;
let salarioBase = 0;

if(salario < 1556.94)
{
    salario = salario - salario*8/100;
}else
if (salario > 1556.95 && salario <2594.92)
{
    INSS = salario*9/100;
}else
if (salario > 2594.93 && salario < 5189.82)
{
    INSS = salario*(11/100);
}else
if(salario > 5189.82)
{
    INSS = 570.88;
}
salarioBase = salario - INSS;
if(salarioBase < 1903.98)
{
    IR = 0;
    parcelaIR = 0;
}else
if(salarioBase >= 1903.99 && salarioBase <= 2826.65)
{
    IR = 0.075;
    parcelaIR = 142.80;
}else
if(salarioBase >= 2826.66 && salarioBase <= 3751.05)
{
    IR = 0.15;
    parcelaIR =  354.80;
}else
if(salarioBase >= 3751.06 && salarioBase <= 4664.68)
{
    IR = 0.225;
    parcelaIR = 636.13;
}else
if(salarioBase >  4664.68)
{
    IR = 0.275;
    parcelaIR = 869.36;
}

salarioBase = salario - INSS;
let parcelaMensal = (salarioBase*IR) - parcelaIR;
let salarioLiquido = salarioBase - parcelaMensal;
console.log("Salario Liquido: " + salarioLiquido);