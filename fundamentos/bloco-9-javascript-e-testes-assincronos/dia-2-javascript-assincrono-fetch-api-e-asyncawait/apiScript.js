// apiScript.js     
const joke = document.getElementById('jokeContainer'); 
console.log(joke);

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const fet = await fetch(API_URL, myObject);
  const data = await fet.json();
  console.log("seg")

};
const promisse = async (bol) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      if (bol) resolve('Aceito');
      reject('Recusado');
    }, 3_000) ;
  });
}
promisse(false)
  .then(msg => console.log(msg))
  .catch((erro)=> console.log(erro));

window.onload = () => fetchJoke();