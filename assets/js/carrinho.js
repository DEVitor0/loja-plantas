function removePrimeiroElemento(item) {
    const arrayIcones = Array.from(item);
    arrayIcones.shift();
    return arrayIcones
}

function clicouCarrinho() {
    const iconeCarrinho = window.document.querySelectorAll('.sexta-carrinho');
    const novoIconeCarrinho = removePrimeiroElemento(iconeCarrinho)
    novoIconeCarrinho.forEach((element, indice) => {
        element.addEventListener('click', () => {
            return indice;
        })
    })
}
clicouCarrinho()

