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
  if(num === 24 || num === 25 || num === 31)
  {
     return "day holiday";
  }
  if(num === 4 || num === 11 || num === 18 || num === 25)
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

function criarBotao (text)
{
  let btn = document.querySelector (".buttons-container");
  let botao = document.createElement ('button');
  botao.setAttribute('id', "btn-holiday");
  botao.innerText = text;
  btn.appendChild(botao);
}
criarBotao("Feriados");

function corFeriado ()
{
  let holiday =  document.querySelectorAll ('.holiday')
  for (let i =0; i< holiday.length; i++)
  {
    holiday[i].classList.toggle("cor-de-fundo")
  }
}
let botaoSelectAll = document.querySelector ("button");
botaoSelectAll.addEventListener('click', corFeriado);








