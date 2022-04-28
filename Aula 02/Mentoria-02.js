// Operador lógico && (AND / E)
var x = 3;
var y = 5;

if (x === 3 && y === 5) {
} // true
if (x === '3' && y === '5') {
} // false

// Operando lógico || (ou / or)
if (x === 3 || y === '5') {
}

// operador lógico ! (not/não)
if (x !== 3 && y == '5') {
}

//if statement / condicional if
var isTrue = true;
function verdadeiroOuFalso(a, b) {
  if (a === b) {
    return 'A é igual a B';
  }
  return 'Nao é verdade';
}

//Objeto: Uma caixa que você armanezar várias coisas
//Dentro de um objeto: objeto, método, array, number, string

var pessoa = {
  nome: 'Pedro',
  dataDeNascimento: '17/03/2000',
  cpf: '192.168.333-12',
  animais: ['Aladim', 'Flock'],
  idade: 22,
};

// Adicionar uma nova propriedade dentro de um array de um objeto
pessoa.animais.reduce([1]);
console.log(pessoa);

// Adicionar um método/função em um objeto
pessoa.andar = function () {
  return 'Mexer as pernas';
};

pessoa.aniversario = function () {
  pessoa.idade++;
};

var myVar = 0;
function name(params) {}

var objeto = {
  propriedade: 'valor',
  metodo: function name() {},
};
