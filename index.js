function capturarEntrada(mensagem) {
    return prompt(mensagem);
}

function calcularOperacao(operacao, num1, num2) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Erro: Divisão por zero!";
            }
        default:
            return "Operação inválida!";
    }
}

function exibirResultado(resultado) {
    console.log(resultado);
}

function simulador() {
    let operacao = capturarEntrada("Digite a operação desejada (+, -, *, /):");

    let num1 = parseFloat(capturarEntrada("Digite o primeiro número:"));
    let num2 = parseFloat(capturarEntrada("Digite o segundo número:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        let resultado = calcularOperacao(operacao, num1, num2);

        exibirResultado(resultado);
    } else {
        exibirResultado("Erro: Números inválidos!");
    }
}


simulador();