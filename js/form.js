class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function verificterms () {
    let submitbtn = document.getElementById('submit')
    let agreebtn = document.getElementById('agree')
    if (agreebtn.checked) {
        submitbtn.disable = "false"
        submitbtn.style.background = "#1B357E"
        

    }
    else {
        submitbtn.disable = "true"
        submitbtn.style.background = "gray"
    };

}

function Post(form, event) {
    event.preventDefault();

    const nome = form.nome.value;
    const sobrenome = form.sobrenome.value;
    const email = form.email.value;
    const cpf = form.cpf.value;
    const telefone = form.telefone.value;
    const contato = form.contato.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("EMAIL INVÁLIDO! Por favor, digite um e-mail válido.");
        return;
    }


    let data = new Contato(nome, sobrenome, email, cpf, telefone, contato);
    localStorage.setItem("formulario", JSON.stringify(data));

    alert(
        `Formulário enviado com sucesso!\n\n` +
        `Nome: ${nome} ${sobrenome}\n` +
        `E-mail: ${email}\n` +
        `CPF: ${cpf}\n` +
        `Telefone: ${telefone}\n` +
        `Contato preferido: ${contato}`
    );

  
    if (nome !== "") {
        alert(`Obrigado, ${nome}! Seus dados foram salvos com sucesso.`);
    }


    form.reset();
}