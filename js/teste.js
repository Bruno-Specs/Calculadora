const { somar, subtrair, dividir, multiplicar } = require("./calculadora.js");

function assert(condicao, mensagem) {
  if (!condicao) {
    throw new Error(mensagem);
  }
}

function rodarTestes() {
  console.log("Iniciando testes...");

  // Testes para somar
  assert(somar(2, 3) === 5, "Erro: 2 + 3 deve ser 5");
  assert(somar(-1, 1) === 0, "Erro: -1 + 1 deve ser 0");

  // Testes para subtrair
  assert(subtrair(5, 3) === 2, "Erro: 5 - 3 deve ser 2");
  assert(subtrair(3, 5) === -2, "Erro: 3 - 5 deve ser -2");

  // Testes para multiplicar
  assert(multiplicar(2, 3) === 6, "Erro: 2 * 3 deve ser 6");
  assert(multiplicar(-2, 3) === -6, "Erro: -2 * 3 deve ser -6");

  // Testes para dividir
  assert(dividir(6, 3) === 2, "Erro: 6 / 3 deve ser 2");
  assert(dividir(5, 2) === 2.5, "Erro: 5 / 2 deve ser 2.5");

  console.log("Todos os testes passaram!");
}

rodarTestes();
