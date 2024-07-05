class Formulario {
    constructor(formulario, emailInserido, senhaInserida) {
        this.formulario = formulario;
        this.emailInserido = emailInserido;
        this.senhaInserida = senhaInserida;

        this.emailRegistrado = JSON.parse(localStorage.getItem('emailsRegistrados')) || [];
        this.senhasRegistradas = JSON.parse(localStorage.getItem('senhasRegistradas')) || [];
    }

    escutaFormulario() {
        const formulario = document.querySelector(this.formulario);
        if (formulario) {
            formulario.addEventListener('submit', (e) => {
                e.preventDefault();
                this.verificaDados();
            });
        }
    }

    mensagemErro(mensagem) {
        const formulario = document.querySelector(this.formulario);
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

    verificaDados() {
        const email = document.querySelector(this.emailInserido);
        const senha = document.querySelector(this.senhaInserida);

        if (email.value && senha.value) {
            if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
                this.mensagemErro('Endereço de email incorreto');
            } else {
                if (window.location.href.includes('criar.html')) {
                    this.emailRegistrado.push(email.value);
                    this.senhasRegistradas.push(senha.value);
                    localStorage.setItem('emailsRegistrados', JSON.stringify(this.emailRegistrado));
                    localStorage.setItem('senhasRegistradas', JSON.stringify(this.senhasRegistradas));
                    window.location.href = 'http://127.0.0.1:5500/index.html';
                }
            }

            if (window.location.href.includes('login.html')) {
                const indexEmail = this.emailRegistrado.indexOf(email.value);
                if (indexEmail === -1 || this.senhasRegistradas[indexEmail] !== senha.value) {
                    this.mensagemErro('E-mail ou senha incorretos. Tente novamente');
                } else {
                    window.location.href = 'http://127.0.0.1:5500/index.html';
                }
            }
        } else {
            this.mensagemErro('Preencha todos os campos para enviar');
        }
    }
}

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        if (window.location.href.includes('criar.html')) {
            const f1 = new Formulario('#formR', '#emailR', '#senhaR');
            f1.escutaFormulario();
        } else {
            const f2 = new Formulario('#formL', '#emailL', '#senhaL');
            f2.escutaFormulario();
        }
    });
})();
