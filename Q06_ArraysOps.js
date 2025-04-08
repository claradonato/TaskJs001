//Crie um script para exemplificar como adicionar e remover elementos no início, no
//fim da lista. Exemplificar também como adicionar e remover elementos em uma determinada posição da
//lista

let list = ['Fevereiro', 'Março', 'Dezembro'];

let num = list.pop(); //remove elemento final
console.log(list);

console.log(list.push('Maio')); // adc elemento(s) final e retorna novo tam
console.log(list);

console.log(list.unshift('Dezembro', 'Janeiro')); //adc um ou mais elementos início
console.log(list);

console.log(list.shift()); //remove e retorna o primeiro elemento
console.log(list);

list.splice(3, 0, 'Abril');
console.log(list);

/*
O método splice utiliza os seguintes parâmetros 
list.splice(início, remover, item1, item2, ...)
- início: posição inicial para alterar
- quantidade de elementos para remover
- item ou itens que deseja adicionar nesse local

no exemplo list.splice(2, 1) -> inicia no índice 2 e remove um elemento
*/
