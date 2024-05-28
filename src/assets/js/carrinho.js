import { displayNone, utilidades, removeElemento } from "./script";

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

function clicouCarrinho() {
    return new Promise((resolve, reject) => {
        const iconeCarrinho = document.querySelectorAll('.sexta-carrinho');
        const itens = document.querySelectorAll('.produtos-plantas');
        const iconeSexta = document.querySelectorAll('.fa-basket-shopping');
        const arraySexta = removeElemento(iconeSexta, 0);

        iconeCarrinho.forEach((element, indice) => {
            const handleCarrinhoClick = () => {
                if (element.classList.contains('clicado')) {
                    return;
                }

                element.classList.add('clicado');
                element.style.backgroundColor = '#47941a';
                exibeConfirmação(element);

                const posiçãoIcone = arraySexta[indice];
                posiçãoIcone.style.color = 'white';

                const nomeProduto = itens[indice].querySelector('h3').textContent;
                const outrosElementos = Array.from(document.querySelectorAll('.produtos-plantas')).filter(item => {
                    return item.querySelector('h3').textContent === nomeProduto && item !== itens[indice];
                });

                outrosElementos.forEach(outroElemento => {
                    const iconeOutro = outroElemento.querySelector('.fa-basket-shopping');
                    const containerSexta = outroElemento.querySelector('.sexta-carrinho');

                    const indiceOutro = Array.from(iconeCarrinho).indexOf(iconeOutro.parentElement);
                    if (indiceOutro !== -1) {
                        const posIconOutro = arraySexta[indiceOutro];
                        iconeOutro.style.color = 'white';
                        posIconOutro.style.color = 'white';
                        containerSexta.style.backgroundColor = '#47941a';
                        containerSexta.classList.add('clicado');
                    }
                });

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
                    resolve([nome, verificaPreço, desconto, imagem]);
                } else {
                    reject(new Error('Algumas informações necessárias estão faltando'));
                }
            };

            element.removeEventListener('click', element._handleCarrinhoClick);
            element.addEventListener('click', handleCarrinhoClick);
            element._handleCarrinhoClick = handleCarrinhoClick;
        });
    });
}

function exibeConfirmação(elementoEscolhido) {
    const selecionandoCor = window.getComputedStyle(elementoEscolhido);
    const corEscolhida = selecionandoCor.backgroundColor;
    const corEsperada = 'rgb(71, 148, 26)';

    if (corEscolhida === corEsperada) {
        exibeMensagem();
    }

    console.log(corEscolhida);
}

function exibeMensagem() {
    const containerMensagem = window.document.querySelector('body > aside:nth-child(7) > div');
    containerMensagem.style.display = 'flex';
    containerMensagem.style.position = 'fixed';
    utilidades.escurecerTela();
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
    constructor(containerProdutos, containerVasoCarrinho, imagemVasoCarrinho, containerTextoCarrinho, nomeLixo, paragrafoLixo, iconeLixo, containerPromoção, valorInicial, containerValorProduto, valorProduto, containerQuantidadesProdutos, adicionarQuantidades, diminuir, iconeMenos, divGenérica, quantidadeProduto, aumentar, iconeMais, valorQuantia, preçoItem) {
        this.containerProdutos = containerProdutos;
        this.containerVasoCarrinho = containerVasoCarrinho;
        this.imagemVasoCarrinho = imagemVasoCarrinho;
        this.containerTextoCarrinho = containerTextoCarrinho;
        this.nomeLixo = nomeLixo;
        this.paragrafoLixo = paragrafoLixo;
        this.iconeLixo = iconeLixo;
        this.containerPromoção = containerPromoção;
        this.valorInicial = valorInicial;
        this.containerValorProduto = containerValorProduto;
        this.valorProduto = valorProduto;
        this.containerQuantidadesProdutos = containerQuantidadesProdutos;
        this.adicionarQuantidades = adicionarQuantidades;
        this.diminuir = diminuir;
        this.iconeMenos = iconeMenos;
        this.divGenérica = divGenérica;
        this.quantidadeProduto = quantidadeProduto;
        this.aumentar = aumentar;
        this.iconeMais = iconeMais;
        this.valorQuantia = valorQuantia;
        this.preçoItem = preçoItem;
    }

    criaContainer() {
        const containerProdutosId = window.document.querySelector('#container-produtos');

        this.simplifica(this.containerProdutos, 'container-produtos');
        this.simplifica(this.containerVasoCarrinho, 'container-vaso-carrinho');
        this.simplifica(this.imagemVasoCarrinho, 'imagem-vaso-carrinho');
        this.simplifica(this.containerTextoCarrinho, 'container-texto-carrinho');
        this.simplifica(this.paragrafoLixo, 'nome-produto');
        this.simplifica(this.iconeLixo, ['fa-regular', 'fa-trash-can', 'clicavel', 'icone-lixeira'])
        this.simplifica(this.containerPromoção, 'container-promoção-carrinho');
        this.simplifica(this.valorInicial, 'valor-incial');
        this.simplifica(this.containerValorProduto, 'container-valor-produto');
        this.simplifica(this.valorProduto, 'valor-produto');
        this.simplifica(this.containerValorProduto, 'container-valor-produto');
        this.simplifica(this.valorProduto, 'valor-produto');
        this.simplifica(this.containerQuantidadesProdutos, 'container-quantidade-produto');
        this.simplifica(this.adicionarQuantidades, 'adiconar-quantidades');
        this.simplifica(this.diminuir, 'diminuir');
        this.simplifica(this.iconeMenos, ['fa-solid', 'fa-minus', 'clicavel']);
        this.simplifica(this.quantidadeProduto, 'quantidade-produto');
        this.simplifica(this.aumentar, 'aumentar');
        this.simplifica(this.iconeMais, ['fa-solid', 'fa-plus', 'clicavel']);
        this.simplifica(this.valorQuantia, 'valor-quantia');

        const containerPai = containerProdutosId.appendChild(this.containerProdutos);
        const vasoCarrinho = containerPai.appendChild(this.containerVasoCarrinho);
        const imagemVaso = vasoCarrinho.appendChild(this.imagemVasoCarrinho);

        const containerTextoCarrinho = containerPai.appendChild(this.containerTextoCarrinho);
        const nomeLixo = containerTextoCarrinho.appendChild(this.nomeLixo);
        const pLixo = nomeLixo.appendChild(this.paragrafoLixo);
        nomeLixo.appendChild(this.iconeLixo);

        const containerPromoção = containerTextoCarrinho.appendChild(this.containerPromoção);
        const valorInicial = containerPromoção.appendChild(this.valorInicial);

        const containerValorProduto = containerTextoCarrinho.appendChild(this.containerValorProduto);
        const valorProduto = containerValorProduto.appendChild(this.valorProduto);

        const containerQuantidadesProduto = containerTextoCarrinho.appendChild(this.containerQuantidadesProdutos);
        const adicionarQuantidades = containerQuantidadesProduto.appendChild(this.adicionarQuantidades);
        const diminuir = adicionarQuantidades.appendChild(this.diminuir);
        diminuir.appendChild(this.iconeMenos);
        const divGenérica = adicionarQuantidades.appendChild(this.divGenérica);
        const paragrafo = divGenérica.appendChild(this.quantidadeProduto);
        const aumentar = this.adicionarQuantidades.appendChild(this.aumentar);
        aumentar.appendChild(this.iconeMais);
        const valorFinal = containerQuantidadesProduto.appendChild(this.valorQuantia);

        return [imagemVaso, pLixo, valorInicial, valorProduto, diminuir, paragrafo, aumentar, valorFinal]
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
                const imagem = criaContainer[0];
                imagem.style.backgroundImage = `url("${imagemSrc}")`;
            }
        } catch (error) {
            console.error(error);
        }
    }

    static subtotal = 0;

    async adicionaTexto(nome, itemEscolhido, mensagem) {
        try {
            if (nome !== undefined) {
                const criaContainer = this.criaContainer();
                const paragrafo = criaContainer[itemEscolhido];
                paragrafo.textContent = mensagem

            }
        } catch (error) {
            console.error("Erro em adicionaNome:", error);
        }
    }

    verificaQuantidade() {
        const iconeMenos = this.iconeMenos;
        const quantidade = this.quantidadeProduto;
        const iconeMais = this.iconeMais;
        let contador = 1;
        const exibeCarrinho = this;

        const fazConta = () => {
            const preçoFatiado = exibeCarrinho.preçoItem.slice(3, 5);
            const realizaConta = Number(preçoFatiado) * contador;
            return realizaConta;
        };

        const atualizaPreco = () => {
            const paragrafo = this.valorQuantia;
            const subtotalItem = fazConta();
            paragrafo.textContent = `R$ ${subtotalItem},00`;
            ExibeCarrinho.subtotal -= this.subtotalItem || 0;
            this.subtotalItem = subtotalItem;
            ExibeCarrinho.subtotal += subtotalItem;
            const preçoFinal = window.document.querySelector('.preço-final');
            const preçoFinalFinal = window.document.querySelector('#preço-final-final');
            preçoFinal.textContent = `R$ ${ExibeCarrinho.subtotal},00`;
            preçoFinalFinal.textContent = `R$ ${ExibeCarrinho.subtotal},00`
        };

        const removeItens = () => {
            const iconesLixeira = window.document.querySelectorAll('.icone-lixeira');
            const preçoFinal = window.document.querySelector('.preço-final');
            const preçoFinalFinal = window.document.querySelector('#preço-final-final');
        
            iconesLixeira.forEach((icone, index) => {
                if (!icone.dataset.listenerAdded) {
                    icone.addEventListener('click', () => {
                        const itemCarrinho = icone.closest('.container-produtos');
        
                        if (itemCarrinho) {
                            ExibeCarrinho.subtotal -= fazConta();
    
                            itemCarrinho.remove();
                            verificaCarrinho();
        
                            preçoFinal.textContent = `R$ ${ExibeCarrinho.subtotal},00`;
                            preçoFinalFinal.textContent = `R$ ${ExibeCarrinho.subtotal},00`;
                        }
                    });
    
                    icone.dataset.listenerAdded = "true";
                }
            });
        }

        const escutaClique = (icone, operação) => {
            icone.addEventListener('click', () => {
                if (operação === '+') {
                    contador++;
                } else if (operação === '-') {
                    if (contador > 1) {
                        contador--;
                    }
                }
                quantidade.textContent = contador;
                atualizaPreco();
            });
        };

        quantidade.textContent = contador;
        escutaClique(iconeMais, '+');
        escutaClique(iconeMenos, '-');

        atualizaPreco();
        removeItens();
    } 

    removerTodosItens() {
        const botão = window.document.querySelector('#excluir-itens');
        const lixeiraIcone = window.document.querySelector('#lixeira-excluir-itens');
    
        function elementoClicavel(item) {
            item.addEventListener('click', () => {
                const itensNoCarrinho = window.document.querySelector('#container-produtos').children;
                const sliceDosItens = Array.from(itensNoCarrinho); 
    
                sliceDosItens.forEach(element => {
                    element.remove();
                    verificaCarrinho();
                    ExibeCarrinho.subtotal = 0;
                });
            });
        }
    
        elementoClicavel(botão);
        elementoClicavel(lixeiraIcone);
    }    
    
}

function criaElemento(elemento) {
    return window.document.createElement(elemento)
}

async function exibirProdutosCarrinho() {
    const elementosNecessarios = await clicouCarrinho();

    const exibeCarrinho = new ExibeCarrinho(criaElemento("div"), criaElemento("div"), criaElemento("div"), criaElemento("div"), criaElemento("div"), criaElemento("p"), criaElemento("i"), criaElemento("div"), criaElemento("del"), criaElemento("div"), criaElemento("p"), criaElemento("div"), criaElemento("div"), criaElemento("div"), criaElemento("i"), criaElemento("div"), criaElemento("p"), criaElemento("div"), criaElemento("i"), criaElemento("p"), elementosNecessarios[1]);

    await exibeCarrinho.adicionaImagem(elementosNecessarios[3]);
    await exibeCarrinho.adicionaTexto(elementosNecessarios[0], 1, elementosNecessarios[0]);
    await exibeCarrinho.adicionaTexto(elementosNecessarios[2], 2, `De: ${elementosNecessarios[2]}`);
    await exibeCarrinho.adicionaTexto(elementosNecessarios[1], 3, `Por: ${elementosNecessarios[1]}`);
    exibeCarrinho.verificaQuantidade(elementosNecessarios[0]);
    verificaCarrinho();
    exibeCarrinho.removerTodosItens();
}
exibirProdutosCarrinho();

function adicionaItem() {
    const clicou = window.document.querySelectorAll('.sexta-carrinho');
    const containerProdutosId = window.document.querySelector('#container-produtos');
    clicou.forEach((element) => {
        element.addEventListener('click', () => {
            exibirProdutosCarrinho();
            verificaLarguraTela();

            if (containerProdutosId.children.length >= 4 && !verificaLarguraTela()) {
                containerProdutosId.style.overflowY = 'auto';
            }
        }, { once: true })
    })
}
adicionaItem();

function verificaLarguraTela() {
    if (window.innerWidth >= 992 && window.innerWidth <= 1999 && window.innerHeight <= 672) {
        const carrinho = window.document.querySelector('#carrinho');
        carrinho.style.overflowY = 'auto';
        return true;
    }
}

function verificaCarrinho() {
    const mensagemFalha = window.document.querySelector('#sem-conteudo');
    const statusCompras = window.document.querySelector('#status-compras');
    const carrinho = window.document.querySelector('#container-produtos');
    displayNone(statusCompras);

    if (carrinho.children.length >= 1) {
        displayNone(mensagemFalha)
        statusCompras.style.display = 'block';
    } else {
        displayNone(statusCompras);
        mensagemFalha.style.display = 'flex';
    }
}
