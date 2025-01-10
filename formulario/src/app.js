function validar(){

    
    const nome = formuser.nome.value;
    const email = formuser.email.value;
    const senha = formuser.senha.value;
    const rep_senha = formuser.rep_senha.value;

    
    if(!validarNome(nome)){
        exibirAlerta('warning', 'Nome inválido', 'Preencha o campo nome!');
        return false;
    }

    
    if(!validarEmail(email)){
        exibirAlerta('warning', 'E-mail inválido', 'Preencha o campo e-mail!');
        return false;
    }

    
    if(!validarSenha(senha)){
        exibirAlerta('warning', 'Senha inválida', 'Preencha o campo senha com mínimo 6 caracteres!');
        return false;
    }

    
    if(senha !== rep_senha){
        exibirAlerta('error', 'Senha senhas coincidem', 'O campo confirmação da senha deve ser igual à senha!');
        return false;
    }

    exibirAlerta('success', 'Tudo certo!', 'Formulário validado com sucesso.');

    return false;

}

function validarNome(nome){
    return nome.trim().length > 0;
}

function validarEmail(email){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function validarSenha(senha){
    return senha.length > 5;
}

function exibirAlerta(icone, titulo, texto){
    Swal.fire({
        icon: icone,
        title: titulo,
        text: texto,
      });
}