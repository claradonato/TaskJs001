let frase1 = 'Hello';
const frase2 = 'World';

//.charAt()
console.log(frase1.charAt(1));

//.concat()
frase1 = frase1.concat(frase2);
console.log(frase1);

//.indexOf()
console.log(frase2.indexOf('d'));

//.replace()
const paragrafo = 'Quem comeu o meu relógio de chocolate?';
console.log(paragrafo.replace('relógio','bolo')); //não altera a string original
console.log(paragrafo);

const regex = /Relógio/i;//indicar a palavra pra alterar utilizando expressão regular
console.log(paragrafo.replace(regex, "biscoito"));
console.log(paragrafo);

//.slice()
let medo = 'Não gosto de lugares altos';
console.log(medo.slice(4));
console.log(medo.slice(0, -6));
console.log(medo.slice(-13))

//.split()
const frutas = 'maça,uva,banana';
const palavras = frutas.split(',');
console.log(palavras[2]);

//.join()
const arrayCPF = [0, 2, 9, 3, 2, 7, 8, 2];
console.log(arrayCPF.join(''));

//propriedade length
const senha = 'senha123';
if(senha.length < 8){
    console.log('Senha muito curta.');
} else {
    console.log('Senha válida.');
}

//Template strings
const nome = 'Clara';
const mensagem = `Olá, meu nome é ${nome}!`;
console.log(mensagem);

const stringLinhas = `Oi
Beleza?
Como você está?`;
console.log(stringLinhas);

var a = 1;
var b = 9;
console.log(`Soma das variáveis é ${a+b}`);
