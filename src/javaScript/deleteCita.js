document.addEventListener('DOMContentLoaded', function() {
    // Coloca aquí tu código JavaScript
    document.getElementById('buscarCitaForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var identificacion = document.getElementById('identificacion').value;
        //Necesito lo del back
        fetch(`http://localhost:8080/citas/eliminar/${identificacion}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al eliminar la cita');
            }
            return response.text(); // Leer la respuesta como texto
        })
        .then(data => {
            mostrarMensaje(data); // Mostrar el mensaje de la respuesta del servidor
            limpiarCampoTexto(); // Limpiar el campo de texto después de eliminar la cita
        })
        .catch(error => {
            console.error('Error al eliminar cita:', error);
            mostrarMensaje('Error al eliminar la cita');
        });
    });
});

function mostrarMensaje(mensaje) {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '<p class="text-red-500">' + mensaje + '</p>';
    resultado.style.color = 'black'; // Cambiar el color del texto a negro
}

function limpiarCampoTexto() {
    document.getElementById('identificacion').value = ''; // Limpiar el campo de texto
}



