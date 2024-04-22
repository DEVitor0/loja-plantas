(function abreMenu() {
    const exibir = document.querySelectorAll('.container-abertura');
    const abertura = document.querySelectorAll('.abertura');

    abertura.forEach((element, index) => {
        element.addEventListener('click', function () {
            const display = exibir[index].style.display;
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

function navegaçãoMenus() {
    const populares = window.document.querySelector('#populares');
    const containerPopulares = window.document.querySelectorAll('.container-populares');

    const novidades = window.document.querySelector('#novidades');
    const containerNovidades = window.document.querySelector('#container-novidades');
    containerNovidades.style.display = 'none';

    const ofertas = window.document.querySelector('#ofertas');
    const containerOfertas = window.document.querySelector('#container-ofertas');
    containerOfertas.style.display = 'none';

    const setaEsquerda = window.document.querySelector(".fa-angle-left");
    const setaDireita = window.document.querySelector(".fa-angle-right");

    populares.addEventListener('click', () => {
        containerPopulares.forEach((element) => {
            element.style.display = 'flex';
        })
        populares.style.color = '#518432';
        novidades.style.color = 'black';
        ofertas.style.color = 'black';

        containerNovidades.style.display = 'none';
        containerOfertas.style.display = 'none';

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
        containerOfertas.style.display = 'none';

        setaDireita.style.display = 'none';
        setaEsquerda.style.display = 'none';
    })

    ofertas.addEventListener('click', () => {
        containerPopulares.forEach((elements) => {
            elements.style.display = 'none';
        });
        populares.style.color = 'black';
        novidades.style.color = 'black';
        ofertas.style.color = '#518432';

        containerNovidades.style.display = 'none';
        containerOfertas.style.display = 'flex';

        setaDireita.style.display = 'none';
        setaEsquerda.style.display = 'none';
    })
}
navegaçãoMenus()

function carrossel() {
    const plantasEsquerdas = window.document.querySelectorAll(".esquerda");
    const setaEsquerda = window.document.querySelector(".fa-angle-left");

    const plantasDireitas = window.document.querySelectorAll(".direita");
    const setaDireita = window.document.querySelector(".fa-angle-right");

    plantasDireitas.forEach((element) => {
        element.style.display = 'none';
    });

    setaDireita.addEventListener('click', () => {
        plantasDireitas.forEach((element) => {
            element.style.display = 'block';
        });
        plantasEsquerdas.forEach((element) => {
            element.style.display = 'none';
        })
    });

    setaEsquerda.addEventListener('click', () => {
        plantasDireitas.forEach((element) => {
            element.style.display = 'none';
        });
        plantasEsquerdas.forEach((element) => {
            element.style.display = 'block';
        });
    });
}
carrossel()