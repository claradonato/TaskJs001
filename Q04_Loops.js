function infos(pessoas){
    let maiorAltura = 0, menorAltura = Infinity, mediaAlturaMulheres = 0, mediaAlturaHomens = 0, numMulheres = 0, numHomens = 0;

    for(let pessoa of pessoas){
        let {altura, sexo} = pessoa;

        if(altura > maiorAltura) maiorAltura = altura;
        if(altura < menorAltura) menorAltura = altura;

        if(sexo == 'F'){
            mediaAlturaMulheres += altura;
            numMulheres++;
        } else if (sexo == 'M'){
            mediaAlturaHomens += altura;
            numHomens++;
        }
    }

    mediaAlturaMulheres = numMulheres ? (mediaAlturaMulheres / numMulheres).toFixed(2) : 'N/A';
    mediaAlturaHomens = numHomens ? (mediaAlturaHomens / numHomens).toFixed(2) : 'N/A';

    console.log('Maior altura:', maiorAltura);
    console.log('Menor altura:', menorAltura);
    console.log('Média da altura das mulheres:', mediaAlturaMulheres);
    console.log('Média da altura dos homens:', mediaAlturaHomens);
    console.log('Número de mulheres:', numMulheres);
    console.log('Número de homens:', numHomens);

}

const pessoas = [
    {altura: 1.70, sexo: 'F'},
    {altura: 1.60, sexo: 'M'},
    {altura: 1.72, sexo: 'M'},
    {altura: 1.71, sexo: 'F'},
];

infos(pessoas);
