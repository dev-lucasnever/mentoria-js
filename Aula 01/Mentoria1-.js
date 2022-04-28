// Comentário em linha
/*
Comentário em bloco
*/

//Tipo de dados
undefined; // indefinido
null; // vazio
Boolean; // verdadeiro ou falso
Number; // 1 2 3 4
String; // "", '', ``
Array: ['Arroz', 'feijao'];
Object; // Caixa

//Tipos de variaveis (var, const= constante, let= pode ser usado dentro daquele escopo)
//var meuNome = 'Pedro';
var idade = 22;

const pi = 3.14;
let teste = 'teste';

// Variavel não utilizada
var a;

//Case sensitivy / Caps Lock / Quando não está em CAPS /
var testeOi = 'Oi';

// Matematica básica
//Soma
var sum = 10 + 10;
var substracao = 10 - 5;
var multiplication = 10 * 2;
var divisao = 10 / 2;

// Incrementar e decrementar abreviado

myVar++;
myVar--;
console.log(myVar);

//Aumentar e diminuir
var myVar = 87;
myVar += 3;
console.log(myVar);

//String
//Aspas unica
//var meuNome = 'Pedro';
var texto =
  'Ela disse: "-Que porra ta acontecendo" e eu falei: não entendi nada';

// Concatenar string
var inicio = 'Começo ';
var inicioFim = inicio + 'fim';
console.log(inicioFim);

// Construir string
var idade = 18;
var frase = 'Eu tenho ' + idade + ' anos';
console.log(frase);

//Operadores de igualdade e relacionais
var var1 = 3;
var var2 = 7;

// igualdade
var var1 = 3;
console.log(var1 == 3);

//diferença
7 !== '7';

// estritamente igual ou diferente = Verifica o tipo da váriavel
// ===
// !==

// Função
function somar(valorA, valorB) {
  var resultado = valorA - valorB;
  console.log(resultado);
}

somar(10, 5);
