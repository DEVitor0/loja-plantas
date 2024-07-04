class Formulario {
    constructor(formulario, emailInserido, senhaInserida, senhasRegistradas = [], emailRegistrado = []) {
        this.formulario = formulario;
        this.emailInserido = emailInserido;
        this.emailRegistrado = emailRegistrado;
        this.senhaInserida = senhaInserida;
        this.senhasRegistradas = senhasRegistradas;
    }

    escutaFormulario() {
        const formulario = window.document.querySelector(this.formulario);
        if (formulario) {
            formulario.addEventListener('submit', (e) => {
                e.preventDefault();
                this.verificaEmail();
            });
        }
    }

    mensagemErro(mensagem) {
        const formulario = window.document.querySelector(this.formulario);
        if (formulario) {
            const mensagemExistente = formulario.querySelector('.mensagem-erro');
            if (mensagemExistente) {
                mensagemExistente.remove();
            }

            const divMensagem = document.createElement("div");
            divMensagem.classList.add("mensagem-erro");
            const textoMensagem = document.createElement("p");

            divMensagem.appendChild(textoMensagem);
            formulario.appendChild(divMensagem);
            textoMensagem.textContent = mensagem;
        }
    }

    verificaEmail() {
        const email = window.document.querySelector(this.emailInserido);
        const senha = window.document.querySelector(this.senhaInserida);

        if (email.value && senha.value) {
            if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
                this.mensagemErro('Endereço de email incorreto');
            } else {
                if (window.location.href === 'http://127.0.0.1:5500/src/assets/html/criar.html') {
                    this.emailRegistrado.push(email.value);
                    this.senhasRegistradas.push(senha.value);
                }
            }

            if (window.location.href === 'http://127.0.0.1:5500/src/assets/html/login.html') {
                if (this.emailRegistrado.indexOf(email.value) === -1) {
                    this.mensagemErro('E-mail não encontrado! Verifique e tente novamente')
                }
            }
        } else {
            this.mensagemErro('Preencha todos os campos para enviar');
        }
    }
}
(function() {

})();

const f2 = new Formulario('#formR', '#emailR', '#senhaR');
f2.escutaFormulario();