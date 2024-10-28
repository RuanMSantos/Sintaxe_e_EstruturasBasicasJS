let n1 = 5;
let n2 = "5";

if (n1 === n2){
    console.log("iguais");
} else {
    console.log("diferentes");
}

let n3 = 3;

switch(n3){ // comparação sempre estrita
    case 0: // n3 === 0
    console.log("zero");
    break;
    case 1: // n3 === 1
    console.log("um");
    break;
    case 3: // n3 === 3
    console.log("três");
    break;
    default: // else
    console.log("desconhecido");
    break;
}

let n4 = 10, n5 = 20;

console.log(`${n4 == n5 ? "iguais" : "diferentes"}`);

n4 = 20;

console.log(`${n4 == n5 ? "iguais" : "diferentes"}`);

/*
let i = 0;

while (i < 10){
    console.log(i);
    i++;
} */

/* 
let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10) */

for (let i = 0; i <= 10; i++){
    if (i == 0) continue;
    console.log(i);
}

console.error("testando erro");
console.warn("testando aviso");

try {
    x = y * 2;
} catch (err){
    console.warn(err.message);
}

// throw new Error("Erro criado por mim!");

// alert("Hello World!");

// confirm("Tem certeza?"); se confirmado true, se não false

let nome = prompt("Digite seu nome"); // possível receber uma entrada do cliente
// let nome = prompt("Digite seu nome", "Ruan"); já vem com um valor padrão que pode ser alterado