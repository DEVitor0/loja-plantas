import { displayNone, utilidades } from "./script";

function abreMenu() {
    const iconeCarrinho = window.document.querySelector('#abrir-carrinho');
    const carrinho = window.document.querySelector('#carrinho');
    const body = window.document.querySelector('body');
    iconeCarrinho.addEventListener('click', () => {
        carrinho.style.display = 'block';
        body.style.overflowY = 'hidden';
        utilidades.escurecerTela();
    });
}
abreMenu()

function fechaMenu() {
    const carrinho = window.document.querySelector('#carrinho');
    const icone = window.document.querySelector('.fa-xmark');
    const body = window.document.querySelector('body');

    icone.addEventListener('click', () => {
        body.style.overflow = 'auto';
        displayNone(carrinho);
        utilidades.removerEscurecimentoTela();
    });
}
fechaMenu()

function mensagemCarrinho() {
    const conteudoCarrinho = window.document.querySelector('#container-produtos');
    const semConteudo = window.document.querySelector('#sem-conteudo');

    if (!conteudoCarrinho.children.length) {
        semConteudo.style.display = 'flex';

        const exclusão = window.document.querySelector('#exclusão');
        const preçoTotal = window.document.querySelector('#preço-total');
        const preçoFinalContainer = window.document.querySelector('#preço-final-container');
        const botão = window.document.querySelector("#conteudo-carrinho > div:nth-child(5)");

        displayNone(exclusão);
        displayNone(preçoTotal);
        displayNone(preçoFinalContainer);
        displayNone(botão);
    }
}
mensagemCarrinho();

utilidades.abreMensagem('.sexta-carrinho', 'body > aside:nth-child(7) > div');

function clicouCarrinho() {
    const iconeCarrinho = window.document.querySelectorAll('.sexta-carrinho');
    const itens = window.document.querySelectorAll('.produtos-plantas');


    iconeCarrinho.forEach((element, indice) => {
        element.addEventListener('click', () => {
            let posição = indice;
            return console.log(itens[posição])
        })
    });
}
clicouCarrinho()