$('#telefone').mask('(00) 00000-0000',{
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
})

$('form').validate({
    rules: {
        nome: {
            requized: true
        },
        email: {
            requized: true,
            email: true
        },
        telefone: {
            requized: true
        },
        endereco: {
            requized: true
        },
        cep: {
            requized: true
        },
        cpf: {
            requized: true
        },
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
})