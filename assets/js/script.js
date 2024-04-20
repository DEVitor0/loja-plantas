function abreMenu() {
    const exibir = document.querySelectorAll('.container-abertura');
    const abertura = document.querySelectorAll('.abertura');
    
    abertura.forEach((element1, index) => {
        element1.addEventListener('click', function () {
            const display = exibir[index].style.display;
            exibir[index].style.display = (display === 'flex') ? 'none' : 'flex';
        });
    });
}

abreMenu();

