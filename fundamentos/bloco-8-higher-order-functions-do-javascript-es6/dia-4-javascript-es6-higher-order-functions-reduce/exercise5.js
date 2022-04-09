const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => {
    return acc + curr.split('').reduce((ac, cur) => {
      return (cur === 'A' || cur === 'a') ? ac + 1 : ac + 0;
    },0)
  }, 0);
}

console.log(containsA());