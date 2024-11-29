function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const senha_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.nome === "") {
        error.nome = "O nome não deve estar vazio"
    }else{
        error.nome = ""
    }

    if(values.email === "") {
        error.email = "O email não deve estar vazio"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email incorreto"
    }else{
        error.email = ""
    }

    if(values.senha === ""){
        error.senha = "A senha não deve estar vazia"
    }
    else if(!senha_pattern.test(values.senha)) {
        error.senha = "Senha incorreta"
    } else {
        error.senha = ""
    }
    return error;
}

export default Validation;