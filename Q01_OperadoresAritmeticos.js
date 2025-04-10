let x = prompt('Digite o valor de x:');
let y = prompt('Digite o valor de y:');

x = Number(x);
y = Number(y);

let resultado = (x ** y + 3 * x + 1) / (x + 1);
alert(`O resultado da expressão é: ${resultado}`);
console.log(`Resultado: ${resultado}`);
