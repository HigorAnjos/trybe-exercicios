function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function classesSemana (num) {
  if ( num === 25 )
  {
    return "day friday holiday";
  }
  if(num === 24 || num === 31)
  {
     return "day holiday";
  }
  if(num === 4 || num === 11 || num === 18 )
  {
     return "day friday";
  }
  return 'day';
}
function montarLista (dezDaysList)
{
  let ul =  document.getElementById ('days');
  for (let i=0; i < dezDaysList.length; i++)
  {
    let li = document.createElement('li');
    li.classList = classesSemana(dezDaysList[i]);
    li.innerHTML = dezDaysList[i];
    ul.appendChild(li);  
  }
  
}
montarLista(dezDaysList);

function criarBotao (text, id)
{
  let btn = document.querySelector (".buttons-container");
  let botao = document.createElement ('button');
  botao.setAttribute('id', id);
  botao.innerText = text;
  btn.appendChild(botao);
}
criarBotao("Feriados", "btn-holiday");

function corFeriado ()
{
  let holiday =  document.querySelectorAll ('.holiday')
  for (let i =0; i< holiday.length; i++)
  {
    holiday[i].classList.toggle("cor-de-fundo");
  }
}
let botaoSelectAll = document.querySelector ("button");
botaoSelectAll.addEventListener('click', corFeriado);

criarBotao("Sexta-feira", "btn-friday");
let botaoSexSelect = document.getElementById ("btn-friday");
botaoSexSelect.addEventListener ('click', textoSexta)
function textoSexta ()
{
  console.log("click")
  let Sex = document.getElementsByClassName ("friday");
  let tam = [...Sex].length;
  console.log(Sex[0])
  for (let i =0; i< tam; i++)
  {
    Sex[i].classList.toggle("texto-sexta");
  }

}

let Days = document.getElementsByClassName ("day");

for (let i =0; i< Days.length; i++)
{
  Days[i].addEventListener ('mouseover', zoomDays);
  Days[i].addEventListener ('mouseout', zoomDays);
}
function zoomDays (e)
{
  e.target.classList.toggle ("zoom");
}









