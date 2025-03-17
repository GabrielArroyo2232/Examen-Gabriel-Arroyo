var nombre = "Gabriel Arroyo";
console.log("Hola, mi nombre es " + nombre);

const mediaQuery = window.matchMedia('(max-width: 768px)');

function manejarCambio(e) {
    if (e.matches) {
        console.log('Vista móvil');
    } else {
        console.log('Vista escritorio');
    }
}

mediaQuery.addListener(manejarCambio);
manejarCambio(mediaQuery); // Ejecutar una vez al cargar
