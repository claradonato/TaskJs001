const frutas = ['maça', 'banana', 'uva', 'pera', 'melancia'];

const itemProcurado = 'uva';

//verificando se existe no array
if(frutas.includes(itemProcurado)){
    console.log('Foi encontrado');
} else {
    console.log('Não foi encontrado');
}

//Também pode ser obtido o índice do item
const indice = frutas.indexOf(itemProcurado);

if(indice !== -1){
    console.log(`"$(itemProcurado)" está na posição ${indice} do array`);
}