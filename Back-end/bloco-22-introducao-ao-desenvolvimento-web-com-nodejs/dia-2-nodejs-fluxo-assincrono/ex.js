const fs = require('fs');

// EX1 
const func = (param1, param2, param3) => {
  const promisse = new Promise((resolve, reject) => {
    if(typeof param1 !== 'number'||typeof param2 !== 'number'|| typeof param3 !== 'number') {
      reject(new Error ('Informe apenas números'));
    }
    const result = (param1 + param2) * param3;
    if (result < 50 ) reject (new Error('Valor muito baixo'));
    resolve(result);
  })
  return promisse;
}

// func(5,2,10).then(result=> console.log('result', result)).catch(e => console.log(e.message));

// EX 2
const gnrateNumber = () => {
  // return Math.floor(Math.random() * 101)
  return Math.floor(Math.random() * 100 + 1)
}

func(gnrateNumber(),gnrateNumber(),gnrateNumber()).then(result=> console.log(result)).catch(error => error.message);

// EX 3
const laland = async () => {
  // const result = await func(gnrateNumber(),gnrateNumber(),gnrateNumber());
  try {
    const result = await func(1,3,10);
    console.log('ex3', result);
  } catch (error) {
    console.error('error', error.message)
  }
}
laland();

// EX 4 (Síncrono)


// const readData = () => {
//   const archiveName = 'simpsons.json';
//   try {
//     const data = fs.readFileSync(archiveName, 'utf8');
//     console.log('ex4', data);
//   }
//   catch (error) {
//     console.error('ex4',error.message);
//   }
// }
// readData();

// Olhar gabarito para ver como proceder no EX 4 //

// EX 4 (Assíncrono)
const readData = () => {
  const archiveName = 'simpsons.json';
    fs.promises.readFile(archiveName, 'utf8')
      .then(response => {
        const data = JSON.parse(response);
        data.forEach(element => {
          console.log(`${element.id} - ${element.name}`);
        })
       })
      .catch(error=> console.log('error', error.message))
}
readData()

// const getCharacterByID = (id) => {
//   const promise = new Promise((resolve, reject) => {
//     try {
//       const charactersResponse = await fs.promises.readFile('simpsons.json', 'utf8');
//       const responseArray =  JSON.parse(charactersResponse);
//       const response = responseArray.find((element)=> element === id );
//       if (response) resolve(response);
//       reject(new Error('Id não encontrado'));
//     } catch (error) { 
//       console.log(error.message);
//     }
//     async (
//       console.log('hi')
//     )()
//   })
//   return promise;
// } 

async function getSimpsonById(id) {
  try {
    const fileContent = await fs.promises
      .readFile('./simpsons.json', 'utf8');
    
    const simpsons = JSON.parse(fileContent);
    const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
    
    if (!chosenSimpson) {
      throw new Error('id não encontrado');
    }

    return chosenSimpson;
  } catch (err) {
    console.error(err);
  }
}

getSimpsonById(1).then(console.log);

async function removeById (id) {
  try {
    const fileContent = await fs.promises
      .readFile('./simpsons.json', 'utf8');
    
    const simpsons = JSON.parse(fileContent);
    const chosenSimpson = simpsons.filter((simpson) => Number(simpson.id) != id);

    const jsonSimpson = JSON.stringify(chosenSimpson);
    fs.promises.writeFile('./simpsons.json', jsonSimpson)

  } catch (err) {
    console.error(err);
  }
}
removeById(6).then(() => removeById(10));

async function familyFile () {
  try {
    const fileContent = await fs.promises
      .readFile('./simpsons.json', 'utf8');
    
    const simpsons = JSON.parse(fileContent);
    const chosenSimpson = simpsons.filter((simpson) => [1,2,3,4].includes(Number(simpson.id)));

    const jsonSimpson = JSON.stringify(chosenSimpson);
    fs.promises.writeFile('./simpsonFamily.json', jsonSimpson)

  } catch (err) {
    console.error(err);
  }
}
familyFile()

async function createNelson () {
  try {
    const fileContent = await fs.promises
      .readFile('./simpsonFamily.json', 'utf8');
    
    const simpsons = JSON.parse(fileContent);
    simpsons.push({ id:11, name:'Nelson Muntz' })

    const jsonSimpson = JSON.stringify(simpsons);
   fs.promises.writeFile('./simpsonFamily.json', jsonSimpson)

  } catch (err) {
    console.error(err);
  }
}
createNelson()

async function swapNelson () {
  try {
    const fileContent = await fs.promises
      .readFile('./simpsonFamily.json', 'utf8');
    
    const simpsons = JSON.parse(fileContent);
    simpsons.forEach((person, i, arr) => {
      if(person.name == 'Nelson Muntz') {
        arr[i].name = 'Maggie Simpson';
      }
    });

    const jsonSimpson = JSON.stringify(simpsons);
   fs.promises.writeFile('./simpsonFamily.json', jsonSimpson)

  } catch (err) {
    console.error(err);
  }
}
swapNelson()