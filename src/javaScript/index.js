document.addEventListener("DOMContentLoaded", function() {
    const agregar = document.getElementById('agregar');
    const opcionesCita = document.getElementById('opciones-cita');
    const modificar = document.getElementById('modificar');
    const opcionesModificar = document.getElementById('opciones-modificar');
    const eliminar = document.getElementById('eliminar');
    const opcionesEliminar = document.getElementById('opciones-eliminar');

    agregar.addEventListener("click", function() {
        opcionesCita.classList.toggle('opacity-100');
        opcionesCita.classList.toggle('invisible');
        opcionesModificar.classList.remove('opacity-100');
        opcionesModificar.classList.add('invisible');
        opcionesEliminar.classList.remove('opacity-100');
        opcionesEliminar.classList.add('invisible');
    });

    modificar.addEventListener("click", function() {
        opcionesModificar.classList.toggle('opacity-100');
        opcionesModificar.classList.toggle('invisible');
        opcionesCita.classList.remove('opacity-100');
        opcionesCita.classList.add('invisible');
        opcionesEliminar.classList.remove('opacity-100');
        opcionesEliminar.classList.add('invisible');
    });

    eliminar.addEventListener("click", function() {
        opcionesEliminar.classList.toggle('opacity-100');
        opcionesEliminar.classList.toggle('invisible');
        opcionesCita.classList.remove('opacity-100');
        opcionesCita.classList.add('invisible');
        opcionesModificar.classList.remove('opacity-100');
        opcionesModificar.classList.add('invisible');
    });
});
