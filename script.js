function calcular() {
    let operacao = prompt("Digite a operação (+, -, *, /):");
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Não é possível dividir por zero.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    alert("Resultado: " + resultado);
}
