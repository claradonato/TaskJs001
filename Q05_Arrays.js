// mudança importante: verificar se o tamanho dos arrays são iguais
function somaArrays(A, B){
    if(A.length != B.length){
        console.log('Soma inválida!');
    } else {
        let resultado = 0;
        for(var i = 0; i < A.length; i++){
            resultado += (A[i] + B[i]);
        }
        return resultado;
    }
}

let A = [1, 2, 3]; //6
let B = [4, 5, 6]; //15

console.log(somaArrays(A, B));
