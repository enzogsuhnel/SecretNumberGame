function verficaChuteValido(chute) {
    const numero = +chute;
    if(numeroForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
    }
    
    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    }
    if (numero == numeroSecreto) {
    document.body,innerHTML = `
        <h2>Você Acertou!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
    `
    }
}
function numeroForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}