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

    plantasDireitas.forEach((element) => {
        displayNone(element);
    });

    setaDireita.addEventListener('click', () => {
        plantasDireitas.forEach((element) => {
            element.style.display = 'block';
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

    function removerEscurecimentoTela() {
        overlay.remove()
    }

    function abreFavorito() {
        const coração = window.document.querySelectorAll('.coração');
        const containerMensagem = window.document.querySelector('.container-mensagem');

        coração.forEach((element) => {
            element.addEventListener('click', () => {
                containerMensagem.style.display = 'flex';
                containerMensagem.style.position = 'fixed';
                escurecerTela();
            });
        });
    }

    function fechaFavorito() {
        const iconeFechar = window.document.querySelector(".container-mensagem > div:nth-child(1) > i");
        const containerMensagem = window.document.querySelector('.container-mensagem');

        iconeFechar.addEventListener('click', () => {
            containerMensagem.style.display = 'none';
            removerEscurecimentoTela();
        });
    }

    return {
        escurecerTela: escurecerTela,
        abreFavorito: abreFavorito,
        fechaFavorito: fechaFavorito,
        removerEscurecimentoTela: removerEscurecimentoTela
    };
})();

utilidades.abreFavorito()
utilidades.fechaFavorito()
