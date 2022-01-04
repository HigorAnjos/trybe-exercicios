const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, Element) => {
    return acc.concat(Element)
  });
}
console.log(flatten());