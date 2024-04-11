document.getElementById('buscarCitaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var identificacion = document.getElementById('identificacion').value;
    //Necesito lo del back
    fetch('url_del_backend/buscarCitaPorIdentificacion?id=' + identificacion)
    .then(response => response.json())
    .then(data => {
        // Maneja los datos recibidos del backend aquí
        mostrarResultado(data);
    })
    .catch(error => {
        console.error('Error al buscar cita:', error);
    });
});

function mostrarResultado(citaEncontrada) {
    // Genera el HTML para mostrar la cita encontrada
    var resultadoHTML = '<h2 class="text-xl font-bold mt-4">Resultado de la búsqueda:</h2>';
    resultadoHTML += '<p><strong>ID:</strong> ' + citaEncontrada.id + '</p>';
    resultadoHTML += '<p><strong>Nombre:</strong> ' + citaEncontrada.nombre + '</p>';
    resultadoHTML += '<p><strong>Fecha:</strong> ' + citaEncontrada.fecha + '</p>';
    resultadoHTML += '<p><strong>Especialidad:</strong> ' + citaEncontrada.especialidad + '</p>';
    resultadoHTML += '<p><strong>Número de Identificación:</strong> ' + citaEncontrada.identificacion + '</p>';
    resultadoHTML += '<p><strong>Costo:</strong> ' + citaEncontrada.costo + '</p>';

    document.getElementById('resultado').innerHTML = resultadoHTML;
}
