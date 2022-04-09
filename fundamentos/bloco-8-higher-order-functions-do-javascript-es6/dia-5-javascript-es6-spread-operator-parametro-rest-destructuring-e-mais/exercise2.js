const soma = (...numbers) => {
  return numbers.reduce((acc, curr) => acc+curr);
}

const arr = [1, 2, 3, 4, 5];

console.log(soma(...arr))