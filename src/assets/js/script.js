(function abreMenu() {
    const exibir = document.querySelectorAll('.container-abertura');
    const abertura = document.querySelectorAll('.abertura');

    abertura.forEach((element, index) => {
        element.addEventListener('click', function () {
            const display = exibir[index].style.display;
            exibir.forEach((element2) => {
                displayNone(element2)
            });
            exibir[index].style.display = (display === 'flex') ? 'none' : 'flex';
        });
    });
})();

(function animaçãoInicial() {
    const containerTitulo = document.querySelector("#titulo-carrossel");
    const meuObservador = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                containerTitulo.classList.add('slideAnimation');
            } else {
                containerTitulo.classList.remove('slideAnimation');
            }
        });
    });
    meuObservador.observe(containerTitulo);
})();

export function displayNone(element) {
    element.style.display = 'none';
}

function navegaçãoMenus() {
    const populares = window.document.querySelector('#populares');
    const containerPopulares = window.document.querySelectorAll('.container-populares');

    const novidades = window.document.querySelector('#novidades');
    const containerNovidades = window.document.querySelector('#container-novidades');
    displayNone(containerNovidades);

    const ofertas = window.document.querySelector('#ofertas');
    const containerOfertas = window.document.querySelector('#container-ofertas');
    displayNone(containerOfertas);

    const setaEsquerda = window.document.querySelector(".fa-angle-left");
    const setaDireita = window.document.querySelector(".fa-angle-right");

    populares.addEventListener('click', () => {
        containerPopulares.forEach((element) => {
            element.style.display = 'flex';
        })
        populares.style.color = '#518432';
        novidades.style.color = 'black';
        ofertas.style.color = 'black';

        displayNone(containerNovidades);
        displayNone(containerOfertas);

        setaDireita.style.display = 'flex';
        setaEsquerda.style.display = 'flex';
    });

    novidades.addEventListener('click', () => {
        containerPopulares.forEach((elements) => {
            elements.style.display = 'none';
        });
        populares.style.color = 'black';
        novidades.style.color = '#518432';
        ofertas.style.color = 'black';

        containerNovidades.style.display = 'flex';
        displayNone(containerOfertas);

        displayNone(setaDireita);
        displayNone(setaEsquerda);
    })

    ofertas.addEventListener('click', () => {
        containerPopulares.forEach((elements) => {
            elements.style.display = 'none';
        });
        populares.style.color = 'black';
        novidades.style.color = 'black';
        ofertas.style.color = '#518432';

        displayNone(containerNovidades)
        containerOfertas.style.display = 'flex';

        displayNone(setaDireita);
        displayNone(setaEsquerda);
    })
}
navegaçãoMenus()

function carrossel() {
    const plantasEsquerdas = window.document.querySelectorAll(".esquerda");
    const setaEsquerda = window.document.querySelector(".fa-angle-left");

    const plantasDireitas = window.document.querySelectorAll(".direita");
    const setaDireita = window.document.querySelector(".fa-angle-right");
    const produtosPlantas = window.document.querySelectorAll('.produtos-plantas');

    plantasDireitas.forEach((element) => {
        displayNone(element);
    });

    setaDireita.addEventListener('click', () => {
        plantasDireitas.forEach((element) => {
            element.style.display = 'block';
            produtosPlantas.forEach(element2 => {
                element2.style.animation = 'slideEsquerda 0.260s ease forwards';
            })
        });
        plantasEsquerdas.forEach((element) => {
            displayNone(element);
        })
    });

    setaEsquerda.addEventListener('click', () => {
        plantasDireitas.forEach((element) => {
            displayNone(element)
        });
        plantasEsquerdas.forEach((element) => {
            element.style.display = 'block';
            produtosPlantas.forEach(element2 => {
                element2.style.animation = 'slideDireita 0.260s ease forwards';
            })
        });
    });
}
carrossel()

export function removeElemento(item, posição) {
    const elemento = Array.from(item);
    elemento.splice(posição, 1);
    return elemento;
}

export const utilidades = (function() {
    let overlay;

    function escurecerTela() {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            overlay.style.zIndex = '99'; 
            document.body.appendChild(overlay);
        }
    }

    function removerEscurecimentoTela() {
        if (overlay) {
            document.body.removeChild(overlay);
            overlay = null; 
        }
    }

    function abreMensagem(seletor, seletor2) {
        const icone = window.document.querySelectorAll(seletor);
        const containerMensagem = window.document.querySelector(seletor2);

        icone.forEach((element) => {
            element.addEventListener('click', () => {
                containerMensagem.style.display = 'flex';
                containerMensagem.style.position = 'fixed';
                escurecerTela();
            });
        });
    }

    function fechaMensagem() {
        const iconeFechar = window.document.querySelectorAll(".icone-fechar");
        const containerMensagem = window.document.querySelectorAll('.container-mensagem');

        iconeFechar.forEach((element) => {
            element.addEventListener('click', () => {
                containerMensagem.forEach((item) => {
                    item.style.display = 'none';
                })
                removerEscurecimentoTela();
            });
        })
    }

    return {
        escurecerTela: escurecerTela,
        abreMensagem: abreMensagem,
        fechaMensagem: fechaMensagem,
        removerEscurecimentoTela: removerEscurecimentoTela
    };
})();

utilidades.abreMensagem('.coração', '.container-mensagem:first-child');
utilidades.fechaMensagem();

function trocaProdutosExibidos() {
    const navegaçãoProdutos = document.querySelectorAll('.navegação-produtos');
    const produtosExibidos = document.querySelectorAll('.container-exibição-produtos');
    const corAtivo = '#47941a';
    const corPadrao = 'rgb(36, 35, 35)';
    const corHover = '#518432';

    produtosExibidos.forEach((produto, indice) => {
        produto.style.display = (indice === 0) ? 'flex' : 'none';
    });

    navegaçãoProdutos.forEach((element, indice) => {
        element.addEventListener('mouseenter', () => {
            if (!element.classList.contains('ativo')) {
                element.style.color = corHover;
            }
        });
        element.addEventListener('mouseleave', () => {
            if (!element.classList.contains('ativo')) {
                element.style.color = corPadrao;
            }
        });
        element.addEventListener('click', () => {
            navegaçãoProdutos.forEach((navItem) => {
                navItem.classList.remove('ativo');
                navItem.style.color = corPadrao;
            });

            element.classList.add('ativo');
            element.style.color = corAtivo;

            produtosExibidos.forEach((produto, produtoIndice) => {
                produto.style.display = (produtoIndice === indice) ? 'flex' : 'none';
            });
        });
    });
}

trocaProdutosExibidos();

(function() {
    const nomes = ["Carlos Oliveira", "João Santos", "Maria Silva"];
    const mensagens = [
        "Curabitur vitae libero ac mauris facilisis commodo. Quisque in velit nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce euismod, urna id facilisis fringilla, quam nisl bibendum mauris, sed ullamcorper tortor justo sit amet leo. ...",
        "Aenean a tortor ut magna pharetra vehicula vel sit amet magna. Donec tincidunt lorem ut elit vehicula, non scelerisque justo cursus. Maecenas at justo justo. Nam sagittis, quam non sollicitudin consectetur, nunc metus vehicula lectus, in fermentum enim nunc nec metus. ...",
        "Integer dignissim sapien et est volutpat, a consequat leo egestas. Sed nec orci ac libero ullamcorper mollis nec ut dui. Ut cursus sem vitae dolor auctor, a facilisis turpis placerat. Vivamus ut nibh eget quam blandit congue non eget felis. Donec sollicitudin justo id libero. ..."
    ];

    const imagens = [
        "./src/assets/img/pessoas/pessoa3.jpg",
        "./src/assets/img/pessoas/pessoa2.jpg",
        "./src/assets/img/pessoas/pessoa1.jpg",
    ];

    let currentIndex = 0;
    let intervalId;

    function showRecommendation(index) {
        currentIndex = index;
        document.getElementById('nome-recomendacao').innerText = nomes[index];
        document.getElementById('mensagem-recomendacao').innerText = mensagens[index];
        console.log('Tentando definir imagem de fundo:', imagens[index]);

        document.getElementById('imagem-perfil').style.backgroundImage = `url('${imagens[index]}')`;

        updatePontos();
    }

    function updatePontos() {
        const pontos = document.querySelectorAll('.pontos');
        pontos.forEach((ponto, index) => {
            ponto.classList.toggle('ativo', index === currentIndex);
        });
    }

    function startCarousel() {
        intervalId = setInterval(() => {
            const nextIndex = (currentIndex + 1) % nomes.length;
            document.getElementById('container-recomendações').classList.remove('show');
            setTimeout(() => {
                showRecommendation(nextIndex);
                document.getElementById('container-recomendações').classList.add('show');
            }, 400);
        }, 4000);
    }

    document.addEventListener('DOMContentLoaded', () => {
        showRecommendation(0);
        startCarousel();
    });

    window.showRecommendation = showRecommendation;
})();