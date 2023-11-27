$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('00000000000')
    $('#cep').mask('00000000')

    $('form').validate({
        rules: {
            nome:{
                required: true,
            },
            cpf:{
                required: true,
            },
            telefone:{
                required: true,
            },
            cep: {
                required: true,
            },
        },
        messages:{
            nome:'Por favor, insira o seu nome!',
            cpf:'Por favor, insira o seu CPF!',
            telefone:'Por favor, insira o seu telefone!',
            cep:'Por favor, insira o seu CEP!'
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })
})