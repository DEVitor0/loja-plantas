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

utilidades.abreMensagem('.sexta-carrinho', 'body > aside:nth-child(7) > div');

function clicouCarrinho() {
    return new Promise((resolve, reject) => {
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
                let imagem = verificaSrc(funcionalidade(0));

                if (desconto !== undefined) {
                    nome = verificaAlgo(funcionalidade(3), 'h3');
                    verificaPreço = verificaAlgo(funcionalidade(3), 'p');
                    imagem = verificaSrc(funcionalidade(1));
                }

                if (nome !== undefined && verificaPreço !== undefined && imagem !== undefined) {
                    return resolve([nome, verificaPreço, desconto, imagem]);
                } else {
                    reject(new Error('Algumas informações necessárias estão faltando.'));
                }
            }, { once: true });
        });
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

class ExibeCarrinho {
    constructor(containerProdutos, containerVasoCarrinho, imagemVasoCarrinho, containerTextoCarrinho, nomeLixo, paragrafoLixo, iconeLixo) {
        this.containerProdutos = containerProdutos;
        this.containerVasoCarrinho = containerVasoCarrinho;
        this.imagemVasoCarrinho = imagemVasoCarrinho;
        this.containerTextoCarrinho = containerTextoCarrinho;
        this.nomeLixo = nomeLixo;
        this.paragrafoLixo = paragrafoLixo;
        this.iconeLixo = iconeLixo;
    }

    criaContainer() {
        const containerProdutosId = window.document.querySelector('#container-produtos');

        this.simplifica(this.containerProdutos, 'container-produtos');
        this.simplifica(this.containerVasoCarrinho, 'container-vaso-carrinho');
        this.simplifica(this.imagemVasoCarrinho, 'imagem-vaso-carrinho');
        this.simplifica(this.containerTextoCarrinho, 'container-texto-carrinho');
        this.simplifica(this.paragrafoLixo, 'nome-produto');
        this.simplifica(this.iconeLixo, ['fa-regular', 'fa-trash-can', 'clicavel'])

        const containerPai = containerProdutosId.appendChild(this.containerProdutos);
        const vasoCarrinho = containerPai.appendChild(this.containerVasoCarrinho);
        const imagemVaso = vasoCarrinho.appendChild(this.imagemVasoCarrinho);
        
        const containerTextoCarrinho = containerPai.appendChild(this.containerTextoCarrinho);
        const nomeLixo = containerTextoCarrinho.appendChild(this.nomeLixo);
        const pLixo = nomeLixo.appendChild(this.paragrafoLixo);
        nomeLixo.appendChild(this.iconeLixo);

        return {
            imagemVaso: imagemVaso,
            pLixo: pLixo
        }
    }

    simplifica(elemento, classes) {
        if (Array.isArray(classes)) {
            classes.forEach(element => {
                elemento.classList.add(element)
            });
        } else {
            elemento.classList.add(classes);
        }
    }

    async adicionaImagem(imagemSrc) {
        try {
            if (imagemSrc) {
                const criaContainer = this.criaContainer();
                const imagem = criaContainer.imagemVaso;
                imagem.style.backgroundImage = `url("${imagemSrc}")`;
            }
        } catch (error) {
            console.error(error);
        }
    }

    async adicionaNome(nome) {
        try {
            const criaContainer = this.criaContainer();
            const paragrafoLixo = criaContainer.pLixo;
            paragrafoLixo.textContent = nome

        } catch (error) {
            console.error("Erro em adicionaNome:", error);
        }
    }
      
    
    acessaClicouCarrinho() {
        return new Promise((resolve, reject) => {
            clicouCarrinho()
                .then(carrinho => {
                    resolve(carrinho);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}

function criaElemento(elemento) {
    return window.document.createElement(elemento)
}

async function exibirProdutosCarrinho() {
    const containerProdutos = criaElemento("div");
    const containerVasoCarrinho = criaElemento("div");
    const containerImagemVaso = criaElemento("div");

    const containerTextoCarrinho = criaElemento("div");
    const nomeLixo = criaElemento("div");
    const pLixo = criaElemento("p");
    const iconeLixo = criaElemento("i");

    const exibeCarrinho = new ExibeCarrinho(containerProdutos, containerVasoCarrinho, containerImagemVaso, containerTextoCarrinho, nomeLixo, pLixo, iconeLixo);

    const elementosNecessarios = await clicouCarrinho()

    await exibeCarrinho.adicionaImagem(elementosNecessarios[3]);
    await exibeCarrinho.adicionaNome(elementosNecessarios[0]);
}
exibirProdutosCarrinho();

function verificaCarrinho() {
    const clicou = window.document.querySelectorAll('.sexta-carrinho')
    const mensagemFalha = window.document.querySelector('#sem-conteudo');
    const statusCompras = window.document.querySelector('#status-compras');
    displayNone(statusCompras)
    
    clicou.forEach(element => {
        element.addEventListener('click', () => {
            displayNone(mensagemFalha)
            statusCompras.style.display = 'block';
        })
    })
}
verificaCarrinho()
