import { displayNone, removeElemento } from "./script";

function abreMenu() {
    const iconeCarrinho = window.document.querySelector('#abrir-carrinho');
    const carrinho = window.document.querySelector('#carrinho');
    const body = window.document.querySelector('body');
    iconeCarrinho.addEventListener('click', () => {
        carrinho.style.display = 'block';
        body.style.overflowY = 'hidden';
        mensagemTela.escurecerTela();
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

function clicouCarrinho() {
    const iconeCarrinho = window.document.querySelectorAll('.sexta-carrinho');
    const novoIconeCarrinho = removeElemento(iconeCarrinho, 0)
    novoIconeCarrinho.forEach((element, indice) => {
        element.addEventListener('click', () => {
            return indice;
        })
    })
}
clicouCarrinho()