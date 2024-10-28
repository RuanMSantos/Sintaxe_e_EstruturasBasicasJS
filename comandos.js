let n1 = 1, n2 = 3;
n1 = "texto"; // possível alterar o valor da variavel para outro tipo, os tipos não estão atribuídos as dados

// NaN -> Não é um número

// dividir um número por zero gera infinity

n2 + n1; // "3texto", gera uma concatenação

let nome = "Ruan", sobrenome = "Martins dos Santos";
let nomeCompleto = `Meu nome completo é ${nome} ${sobrenome}`;

// undefined -> valor atribuído a variáveis sem valor
// para tirar o valor de uma variavel use null invez de undefined
// null e undefined são tipos de dados em js

let numero1 = 10, numero2 = 20;

// console.log("A soma é " + numero1 + numero2); assim os números serão concatenados à string
console.log("A soma é " + (numero1 + numero2));

String(numero1); // converte para string

let s1 = "33", s2 = "1";

s1 + s2; // concatena
s1 * s1; // qualquer operação matemática tenta converter a variavel em numero para realizá-la

Number(s1); // converte para numero
// converter um null retorna 0, enquanto converter um undefined retorna NaN
// converter false gera 0 e converter true gera 1
// converter espaços gera 0, numero entre espaços o número e espaços com numero e mais algo separado NaN

Boolean(" "); // converte para booleano
// tudo que é vazio, como null ou "" ou NaN retorna false, enquanto tudo que tem um valor retorna true

2 ** 4; // com dois asteriscos é possível fazer potenciação 2 elevado a 4 no exemplo
2 ** (1/2); // uma forma de fazer raíz quadrada ou 2 ** 0.5

let a, b, c = "teste";

a ?? "Sem valor"; // ?? usa um valor definido caso a variável seja vazia
a ?? b ?? c ?? "vazios"; // procura valor em a, se não achar usa valor de b e assim sucessivamente

let x = 5;

x = x + 5; // 10

let y, z;

z = y = x + 2; // 12. É possível inicar varias variaveis de uma vez por conta da operação retornar o valor
// x continua valendo 8 e z é igual a y

/* um problema encontrado pela expressão retornar valor é quando usado no if
    
    se caso for feito assim if (x = y), vai te retornar 10 (Boolean(10) = true), com isso retorna true
    e ainda altera o valor do x.
    O correto seria if (x == y) = false.
*/

"A" > "B"; // possivel comparar strings, nesse caso compara-se o valor binario de qual vem primeiro
// nesse caso é falso, "A" vem primeiro que b, então é menor
// letras maiúsculas vem primeiro que minusculas "a" > "A" = true
"aa" > "a"; // true, pois é comparado as primeiras letras que são igual, porem "aa" tem mais caracteres
"xa" > "aaaa" // true, pois apesar de menor em tamanho, a primeira letra é maior
// espaços vazior e strings vazias vem sempre antes de qualquer letra, por isso são menores sempre
// porem a string vazia vem antes do espaço

"2" > 3; // toda comparação com tipos diferentes transforma eles em numeros antes de fazer a comparação
"007" == 7; // true
"1" == true // true, o "1" convertido em numero depois em booleano é true e true == true é true
"000" == false // true

null == undefined; // true
null == null; // true
undefined == undefined // true
// porém null ou undefined comparado com qualquer outro valor sempre retorna false

"0" === 0; // false, na comparação estrita, se os valores forém de tipos diferente já retorna false
null === undefined // false
// preferível que use comparação estrita

"0" !== 0; // true, pois são tipos diferentes. Em "0" != 0 seria true

let etec = "Etec Adolpho Berezin";

etec.length; // tamanho da string

"Ruan Cauan".length; // também é possível fazer direto na string

etec.charAt(0); // "E", passa a posição como parametro e ele retorna a letra 

etec.toUpperCase();
etec.toLowerCase();

etec.includes("dol"); // true. Verifica se contém a string digitada dentro da string

etec.trim(); // trim não retira espaços no meio, apenas no começo e final

etec.repeat(4); // repete a string concatenada quantas vezes forem digitadas

"w".repeat(3); // www

etec.slice(5); // Adolpho Berezin. Esse comando recorta a partir da posição escrita
etec.slice(-7); // Berezin. Com números negativos é contado ao contrário
etec.slice(5, 12); // Adolpho. Começa na posição 5 termina antes da 12
// essa forma de escrever é para facilitar pegar o restante da string etec.slice(12) no exemplo
etec.slice(-15, -8); // Adolpho. Começa na posição 15 invetida e vai até a 8. -15 = A e -8 = o

let num1 = 140;
num1.toString(); // transforma valor em string

num1.toString(2); // string do número em binário, se passar um numero no parenteses é possível alterar
// a base do elemento

num1.toString(16); // hexadecimal

num1.toString(10); // padrão

let pi = Math.PI; // valor de pi

Math.PI.toFixed(3); // conversão string que limita o número de casas decimais com base no número que eu passar
// se não colocar valor ele mantém apenas os inteiros

Math.round(pi); // arredonda o número para o inteiro mais próximo


parseInt("5px"); // 5 converte para int, lendo apenas os numeros no começo, muito bom para valores css

parseFloat("2.5cm"); // 2,5

Math.random(); // 0.7193379430183784 retorna um numero entre 0 e 1

Math.round(Math.random() * 5) + 1; // assim é possível criar um dado de 6 faces

Math.sin(0); // seno de 0 = 0
Math.cos(Math.PI); // cosseno de pi = -1
// sempre retorna em radiano não em graus

Math.sqrt(2); // 1.4142135623730951
Math.pow(2, 3); // 8