document.addEventListener("DOMContentLoaded", function() {
    const agregar = document.getElementById('agregar');
    const opcionesCita = document.getElementById('opciones-cita');

    agregar.addEventListener("click", function() {
        opcionesCita.classList.toggle('opacity-100');
        opcionesCita.classList.toggle('invisible');
    });
});

// Con este código se crea el evento para el botón "Agregar".

// Con este código maneja el evento para el botón Modificar
document.addEventListener("DOMContentLoaded", function() {
    const agregar = document.getElementById('modificar');
    const opcionesCita = document.getElementById('opciones-modificar');

    agregar.addEventListener("click", function() {
        opcionesCita.classList.toggle('opacity-100');
        opcionesCita.classList.toggle('invisible');
    });
});

//Evento para el botón Eliminar
document.addEventListener("DOMContentLoaded", function() {
    const agregar = document.getElementById('eliminar');
    const opcionesCita = document.getElementById('opciones-eliminar');

    agregar.addEventListener("click", function() {
        opcionesCita.classList.toggle('opacity-100');
        opcionesCita.classList.toggle('invisible');
    });
});