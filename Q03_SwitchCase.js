function calculadora(a, b, op){
    switch(op){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        default:
            console.log('Opção Inválida!');
    }
}

console.log(calculadora(10, 2, ')'));
