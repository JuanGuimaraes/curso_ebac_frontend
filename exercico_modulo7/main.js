const form = document.getElementById('form-validacao');



let campoA = document.getElementById("campoA");

let campoB = document.getElementById("campoB");

let mensagemResposta = document.getElementById("mensagem-resposta");



form.addEventListener('submit', function(e) {

    e.preventDefault();

    const mensagemCasoB = `O valor do campo B é maior que o valor do campo A`;

    const mensagemCasoA = `O valor do campo A é maior que o valor do campo B`;

    const mensagemCasoIguais = `O valor do campo B é igual ao valor do campo A`;


    
    if(parseFloat(campoB.value) > parseFloat(campoA.value)) {
        mensagemResposta.innerHTML = mensagemCasoB;

        mensagemResposta.style.display = "block";
    }
    else if(parseFloat(campoB.value) === parseFloat(campoA.value)) {

        mensagemResposta.innerHTML = mensagemCasoIguais;

        mensagemResposta.style.display = "block";
    }
    else {
        mensagemResposta.innerHTML = mensagemCasoA;
        mensagemResposta.style.display="block";
    }
})
