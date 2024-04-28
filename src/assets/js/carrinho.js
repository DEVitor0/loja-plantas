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
            function funcionalidade(posição) {
                return itens[indice].children[posição];
            }

            let nome = verificaAlgo(funcionalidade(2), 'h3');
            let verificaPreço = verificaAlgo(funcionalidade(2), 'p');
            let desconto = verificaAlgo(funcionalidade(3), 'del');
            let imagem = verificaSrc(funcionalidade(0))

            if (desconto !== undefined) {
                nome = verificaAlgo(funcionalidade(3), 'h3');
                verificaPreço = verificaAlgo(funcionalidade(3), 'p');
                imagem = verificaSrc(funcionalidade(1))
            }
            return [nome, verificaPreço, desconto, imagem]

        }, { once: true });
    });
}

function verificaAlgo(funcionalidade, tag) {
    try {
        const itemSelecionado = funcionalidade.querySelector(tag);
        return itemSelecionado ? itemSelecionado.textContent : undefined;
    } catch (error) {
        return undefined;
    }
}

function verificaSrc(funcionalidade) {
    const imagemSelecionada = funcionalidade.querySelector('img');
    if (imagemSelecionada) {
        return imagemSelecionada.src;
    } else {
        return undefined;
    }
}

clicouCarrinho()

class ExibeCarrinho {
    constructor(containerProdutos, containerVasoCarrinho, imagemVasoCarrinho, containerTextoCarrinho, nomeProduto, containerPromoçãoCarrinho, valorInicial, containerValorProduto, valorProduto) {

        this.containerProdutos = containerProdutos;
        this.containerVasoCarrinho = containerVasoCarrinho;
        this.imagemVasoCarrinho = imagemVasoCarrinho;
        this.containerTextoCarrinho = containerTextoCarrinho;
        this.nomeProduto = nomeProduto;
        this.containerPromoçãoCarrinho = containerPromoçãoCarrinho;
        this.valorInicial = valorInicial;
        this.containerValorProduto = containerValorProduto;
        this.valorProduto = valorProduto;
    }

    criaContainer() {
        const containerProdutosId = window.document.querySelector('#container-produtos');

        this.simplifica(this.containerProdutos, 'container-produtos');
        this.simplifica(this.containerVasoCarrinho, 'container-vaso-carrinho');
        this.simplifica(this.imagemVasoCarrinho, 'imagem-vaso-carrinho');

        const containerPai = containerProdutosId.appendChild(this.containerProdutos);
        const containerVaso = containerPai.appendChild(this.containerVasoCarrinho);
        const containerImagem = containerVaso.appendChild(this.imagemVasoCarrinho);

        return [containerImagem]
    }

    simplifica(elemento, classe) {
        elemento = elemento.classList.add(classe)
    }

    adicionaImagem() {
        const criaContainer = this.criaContainer();
        criaContainer[0].style.backgroundImage = `url("${this.acessaClicouCarrinho(3)}")`;
    }

    acessaClicouCarrinho(posição) {
        const carrinho = clicouCarrinho()
        return carrinho[posição]
    }

}

