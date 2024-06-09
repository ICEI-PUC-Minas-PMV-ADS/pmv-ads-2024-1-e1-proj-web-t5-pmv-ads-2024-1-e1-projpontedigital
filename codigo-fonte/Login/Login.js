function entrar() {
    var email = document.getElementById("email_login").value;
    var senha = document.getElementById("senha_login").value;
    var msgError = document.getElementById("msgError");

    // Verificar se o email e a senha estão preenchidos
    if (email.trim() === "" || senha.trim() === "") {
        msgError.innerHTML = "Por favor, preencha todos os campos.";
        return;
    }

    // Verificar se o email está registrado no localStorage
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
    var usuarioEncontrado = listaUsuarios.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    // Se encontrar o usuário, redirecionar para a página de sucesso
    if (usuarioEncontrado) {
        window.location.href = "Homepage.html";
    } else {
        msgError.innerHTML = "Credenciais inválidas. Por favor, tente novamente.";
    }
}
