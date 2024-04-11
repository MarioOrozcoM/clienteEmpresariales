document.getElementById('eliminarConsultorioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var numeroConsultorio = document.getElementById('numeroConsultorio').value;
    //Necesito lo del back
    fetch('url_del_backend/eliminarConsultorio?numero=' + numeroConsultorio, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al eliminar el consultorio');
        }
        return response.json();
    })
    .then(data => {
        mostrarMensaje('Consultorio eliminado correctamente');
    })
    .catch(error => {
        console.error('Error al eliminar consultorio:', error);
        mostrarMensaje('Error al eliminar el consultorio');
    });
});

function mostrarMensaje(mensaje) {
    document.getElementById('resultado').innerHTML = '<p class="text-red-500">' + mensaje + '</p>';
}