// apiScript.js     
<<<<<<< HEAD
console.log(document.querySelector('#jokeContainer'));
/*

const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
=======
const joke = document.getElementById('jokeContainer'); 
console.log(joke);

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
>>>>>>> 3a96c9b80ccfe96f7fcc8a4c65aaf613853187f3
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

<<<<<<< HEAD
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data.joke);

};

window.onload = () => fetchJoke();*/
=======
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
>>>>>>> 3a96c9b80ccfe96f7fcc8a4c65aaf613853187f3
