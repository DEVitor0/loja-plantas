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