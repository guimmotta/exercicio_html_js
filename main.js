const form = document.getElementById('form-compare');

function compare(event) {

    event.preventDefault();

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);


    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").innerText = "Por favor, insira números válidos!";
        return;
    }

    if (number1 > number2) {
        document.getElementById("result").innerText = "O Número 2 não é maior que o número 1.";
    } else if (number1 < number2) {
        document.getElementById("result").innerText = "O Número 2 é maior que o Número 1.";
    } else {
        document.getElementById("result").innerText = "O Número 2 é igual ao Número 1.";
    }
}