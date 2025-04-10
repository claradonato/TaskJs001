//Com Arrays

function soma(x, y, z){
    return x + y + z;
}

const numeros = [1, 2, 3, 4];
console.log(soma(...numeros));
console.log(soma.apply(null, numeros)); //usando numeros como argumento de uma função

const array = ['cachorro', 'gato', 'passarinho']; //adicionar como alterar o nome da chave para o objeto

const obj = {...array};
console.log(obj);

const sequencia = [1, 1, 2, 3, 6];
const fibonacci = [...sequencia];

fibonacci.push(9);
console.log(fibonacci);

//ação do método concat() usando Spread Operator

let array1 = [1, 2, 3];
const array2 = [4, 5, 6];

array1 = [...array1, ...array2];
console.log(array1);

//Com objetos

const obj1 = {nome: 'clara', idade: 19};
const obj2 = {nickname:'d0nuts', senha: 11239};

const cadastro = {...obj1, ...obj2};
console.log(cadastro);


const ehInverno = false;
const alimentacao = {
    maça: 10,
    cenoura: 4,
    batata: 5,
    ...(ehInverno? {chocolate_quente: 30} : {}),
};

console.log(alimentacao);