import { removeElemento } from "./script";

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

