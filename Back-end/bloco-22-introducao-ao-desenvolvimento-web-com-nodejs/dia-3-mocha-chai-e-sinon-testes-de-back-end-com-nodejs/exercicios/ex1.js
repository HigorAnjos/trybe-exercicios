const fs = require('fs');
function number (num) {
  if (typeof num !== 'number') throw new Error('o valor deve ser um número');
  if (num > 0) return 'positivo';
  if (num < 0) return 'negativo';
  if (num === 0) return 'neutro';
}

const escrevaArquivo = (nomeDoArquivo, conteudoDoArquivo) => {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudoDoArquivo);

  return 'ok';
}

module.exports = { number, escrevaArquivo };