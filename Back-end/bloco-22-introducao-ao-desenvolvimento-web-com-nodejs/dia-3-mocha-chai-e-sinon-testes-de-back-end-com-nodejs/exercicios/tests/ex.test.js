const { expect, assert } = require('chai');
const { number, escrevaArquivo } = require('../ex1');
const fs = require('fs');
const sinon = require('sinon');

describe('Executa a função escrevaArquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.equals('ok');
    });
  });
});

describe("Funcao que classifica o tipo do numero", () => {
  it ("Numero maior que 0 e positivo", () => {
    expect(number(5)).to.be.equal('positivo');
    expect(number(5)).to.be.a('string');
  });
  it ("Numero menor que 0 e negativo", () => {
    expect(number(-1)).to.be.equal('negativo');
    expect(number(-1)).to.be.a('string');

  });
  it ("Numero igual a 0 e neutro", () => {
    expect(number(0)).to.be.equal('neutro');
    expect(number(0)).to.be.a('string');
  });
});

describe("Testando erros para a funcao number", () => {
  it ('parametro diferente de numero retorna msg de erro', () => {
    assert.throws(() => number('string'), 'o valor deve ser um número');
  })
})

// describe("função que escreverá um conteúdo em um arquivo específico", () => {
//   it("Concluir a escrita do arquivo ela deverá retornar um ok", async (Done) => {

//   });
// });