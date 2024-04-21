function abreMenu() {
    const exibir = document.querySelectorAll('.container-abertura');
    const abertura = document.querySelectorAll('.abertura');
    
    abertura.forEach((element, index) => {
        element.addEventListener('click', function () {
            const display = exibir[index].style.display;
            exibir[index].style.display = (display === 'flex') ? 'none' : 'flex';
        });
    });
}
abreMenu();

function animaçãoInicial() {
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
}

animaçãoInicial();




