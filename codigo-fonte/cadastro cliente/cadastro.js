function cadastrar() {
    var formulario = document.forms["formulario"];

    // Validar o campo Nome Completo
    if (formulario.nome.value == "" || formulario.nome.value.length < 4) {
        alert("Preencha o campo Nome Completo corretamente!");
        formulario.nome.focus();
        return false;
    }

    // Validar o campo Email
    if (formulario.email.value == "") {
        alert("Preencha o campo Email corretamente!");
        formulario.email.focus();
        return false;
    }

    // Validar o campo Telefone
    if (formulario.telefone.value == "" || formulario.telefone.value.length < 11) {
        alert("Preencha o campo Telefone corretamente!");
        formulario.telefone.focus();
        return false;
    }

    // Validar o campo Endereço
    if (formulario.endereco.value == "" || formulario.endereco.value.length < 10) {
        alert("Preencha o campo Endereço corretamente!");
        formulario.endereco.focus();
        return false;
    }

    // Validar o campo Senha
    if (formulario.Senha.value == "" || formulario.Senha.value.length < 6) {
        alert("Preencha o campo Senha corretamente!");
        formulario.Senha.focus();
        return false;
    }

    // Validar o campo Confirmação de Senha
    if (formulario.ConfirmeSenha.value == "") {
        alert("Preencha o campo Confirmação de Senha corretamente!");
        formulario.ConfirmeSenha.focus();
        return false;
    }

    // Verificar se as senhas coincidem
    if (formulario.Senha.value != formulario.ConfirmeSenha.value) {
        alert("As senhas não correspondem!");
        formulario.ConfirmeSenha.focus();
        return false;
    }

    // Criar um objeto com os dados do cliente
    var cliente = {
        nome: formulario.nome.value,
        email: formulario.email.value,
        telefone: formulario.telefone.value,
        endereco: formulario.endereco.value,
        senha: formulario.Senha.value
    };

    // Armazenar o objeto cliente no localStorage
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
    listaUsuarios.push(cliente);
    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));

    alert("Cliente cadastrado com sucesso!");
    formulario.reset();
    return true;
}
