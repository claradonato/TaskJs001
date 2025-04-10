const funcionarios = [
    {
        id: 25,
        nome: 'Roberto',
        profissao: 'Eletricista',
        dataInicioCargo: '08/04/2025' 
    },
    {
        id: 20,
        nome: 'Manuela',
        profissao: 'Nutricionista',
        dataInicioCargo: '03/12/2024'
    },
    {
        id: 30,
        nome: 'Nico',
        profissao: 'Jornalista',
        dataInicioCargo: '19/07/2020'
    }
];

//ordenar por nome
const nomesOrdenados = funcionarios.sort((a, b) => {
    return a.nome.localeCompare(b.nome);
});
console.log(nomesOrdenados);

//ordenar por codigo
const porCodigo = funcionarios.slice().sort((a, b)=> a.id - b.id);
console.log(porCodigo);

//ordenar por data de início
var today = new Date();
console.log(today);

function parseDataBR(dataBR){
    const [dia, mes, ano] = dataBR.split('/');
    return new Date(`${ano}-${mes}-${dia}`);
}

const porData = funcionarios.slice().sort((a, b)=>{
    const dataA = parseDataBR(a.dataInicioCargo);
    const dataB = parseDataBR(b.dataInicioCargo);
    return dataA - dataB;
});
console.log(porData);
