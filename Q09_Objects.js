// Classes

class Endereco {
    constructor(rua, bairro, cidade, cep) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.cep = cep;
    }
}

class Clinica {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
}

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

class Especializacao {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
}

class Medico extends Pessoa {
    constructor(nome, especializacao) {
        super(nome);
        this.especializacao = especializacao;
    }
}

class Paciente extends Pessoa {
    constructor(nome, telefone) {
        super(nome);
        this.telefone = telefone;
    }
}

class Consulta {
    constructor(medico, paciente, data, hora, clinica) {
        this.medico = medico;
        this.paciente = paciente;
        this.data = data;
        this.hora = hora;
        this.clinica = clinica;
    }
}

//Objetos com campos descritos ------------------------------------------------------------------------------------

// Endereço
const endereco1 = new Endereco('Rua da Laranja Doce', 'Frutas Redondas', 'Comidolândia', '12345-232');

// Clínica
const clinica1 = new Clinica('Clínica Maçã Dourada', endereco1);

// Especializações
const esp1 = new Especializacao('Neurofrutodo', 'Estudo do cérebro das frutinhas');
const esp2 = new Especializacao('Dermofrutologia', 'Cuidado da casca e na aparência');
const esp3 = new Especializacao('Frutoterapia', 'Estudo terapêutico das frutas');

// Médicos
const medico1 = new Medico('Dr. Melancia', esp1);
const medico2 = new Medico('Dr. Limãozinho', esp2);
const medico3 = new Medico('Dra. Goiaba', esp3);

// Paciente
const paciente1 = new Paciente('Banana Amar Ela', '998890022');

// Consulta
const consulta1 = new Consulta(medico1, paciente1, '08/04', '07:00 a.m.', clinica1);

// === SAÍDAS ===

console.log("Consulta:");
console.log(consulta1);

console.log("\nMédicos cadastrados:");
const medicosFrutas = [medico1, medico2, medico3];
medicosFrutas.forEach((medico, i) => {
    console.log(`${i + 1}. ${medico.nome} - ${medico.especializacao.nome}`);
});

console.log("\nCidade da clínica:", clinica1.endereco.cidade);
