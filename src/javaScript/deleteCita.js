document.getElementById('buscarCitaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var identificacion = document.getElementById('identificacion').value;
    //Necesito lo del back
    fetch('url_del_backend/eliminarCitaPorIdentificacion?id=' + identificacion, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al eliminar la cita');
        }
        return response.json();
    })
    .then(data => {
        mostrarMensaje('Cita eliminada correctamente');
    })
    .catch(error => {
        console.error('Error al eliminar cita:', error);
        mostrarMensaje('Error al eliminar la cita');
    });
});

function mostrarMensaje(mensaje) {
    document.getElementById('resultado').innerHTML = '<p class="text-red-500">' + mensaje + '</p>';
}