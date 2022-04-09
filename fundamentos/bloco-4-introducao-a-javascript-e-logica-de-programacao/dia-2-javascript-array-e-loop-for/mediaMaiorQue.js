let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let media = 0;
for(let obj of numbers)
{
    media+= obj;
}
media /= numbers.length;

if(media > 20)
{
    console.log("valor maior que 20");
}else
{
    console.log("valor menor ou igual a 20");
}