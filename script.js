console.log("Gabriel Arroyo");

function ajustarResponsive() {
    const container = document.querySelector('.container');
    if (window.innerWidth < 600) {
        container.style.backgroundColor = '#ffefef'; 
    } else {
        container.style.backgroundColor = '#e5f7ff';
    }
}

window.addEventListener('resize', ajustarResponsive);

ajustarResponsive();