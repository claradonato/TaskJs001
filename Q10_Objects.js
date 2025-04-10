const planetas = [
    {
        nome: "Melancíron",
        tipo: "Gasoso",
        luas: 12,
        habitado: false,
        clima: "Tempestades de suco doce",
    },
    {
        nome: "Banânion",
        tipo: "Rochoso",
        luas: 2,
        habitado: true,
        clima: "Quente e escorregadio",
    },
    {
        nome: "Goiabelus",
        tipo: "Oceânico",
        luas: 5,
        habitado: true,
        clima: "Brisa aromática e terapêutica",
    },
    {
        nome: "Kiwinárion",
        tipo: "Gélido",
        luas: 0,
        habitado: false,
        clima: "Tempestades de neve verde",
    }
];

// ===== LOOP PARA LISTAR OS PLANETAS COM ESTILO DE RELATÓRIO INTERGALÁCTICO =====

console.log("🛸 RELATÓRIO DA MISSÃO: PLANETAS DA GALÁXIA FRUTÁSTICA 🌌\n");

planetas.forEach((planeta, index) => {
    console.log(`🌍 Planeta #${index + 1}: ${planeta.nome}`);
    console.log(`- Tipo: ${planeta.tipo}`);
    console.log(`- Nº de Luas: ${planeta.luas}`);
    console.log(`- Habitado: ${planeta.habitado ? "Sim 👽" : "Não 🪐"}`);
    console.log(`- Clima: ${planeta.clima}`);
    console.log("--------------------------------------\n");
});
