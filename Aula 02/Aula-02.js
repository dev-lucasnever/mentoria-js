// Operador lógicos && (E/AND)
var x = 3;
var y = 5;

x === 3; //true
y === 7; //false

x === 3 && y === 5; //true
x === 3 && y === 7; // false

//Operador lógico || (ou/or)
x === 3 || y === 5; //true
x === 3 || y === 8; //false

//Operador lógico ! (não/not)
!x === 3; //false

//if Statement / Condicional if
function verdadeiroOuFalso(isVerdadeiro) {
  if (isVerdadeiro) {
    return "Yes, it's true";
  }
  return "No, it's false";
}
verdadeiroOuFalso(true);

// Objeto: Tipo um guarda-roupa que você pode colocar várias coisas diferente
// Pode ter qualquer tipo: string, number, array, e até mesmo um outro objeto

var pessoa = {
  nome: 'Pedro',
  idade: 22,
  rg: '45545985-5',
  cpf: '352.513.176-38',
  animais: ['Aladim', 'Jasmine', 'Flock'],
};

//Como acessar os dados dentro de um objeto
//Dot Notation

var idadeValue = pessoa; // pessoa.idade
var rg = pessoa; // pessoa.rg

// Como atualizar uma propriedade do objeto
pessoa.nome = 'Pedro Duca';

// Como adicionar uma nova propriedade no objeto
pessoa.novaPropriedade = 'Roxo';

// Adicionar um método em um objeto
pessoa.andar = function () {
  return 'Pessoa andando';
};

pessoa.aniversario = function () {
  pessoa.idade++;
};

pessoa.idade;

// Revisando
// Vimos sobre váriavel, função, método e propriedade
var myVar = 0;
function funcao(params) {}

var objeto = { propriedade: 'valor', metodo: function name(params) {} };
