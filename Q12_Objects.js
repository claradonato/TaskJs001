//Arrays

const cores =  ['amarelo', 'azul', 'preto'];
const [, , cor3] = cores;

console.log(cores);
console.log(cor3);

function nomeCompleto(){
    return ['clara', 'donato'];
}

const [nome, sobrenome] = nomeCompleto();

console.log(`Nome: ${nome}
Sobrenome: ${sobrenome}`);

//Objetos

const obj = {eixo1: 12, eixo2: 13, eixo: 14};
const {eixo1: x, eixo2: y, eixo: z} = obj; //atribuindo valores dos campos do objeto para as constantes

console.log(x);
const obj2 = {a: 1, b: {c: 2}};
const {a} = obj2;
let {
    b: {c: j},
} = obj2;

console.log(a); //1 
console.log(j); //2


//Objetos com Array
const numeros = [];
const obj3 = {a: 1, b: 2};
({ a: numeros[0], b: numeros[1] } = obj3);
console.log(numeros);
