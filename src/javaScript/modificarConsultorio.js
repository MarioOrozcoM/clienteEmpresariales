document.getElementById('buscarCitaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var consultorio = document.getElementById('consultorio').value;
    
    fetch('url_del_backend/buscarCitaPorConsultorio?numero=' + consultorio)
    .then(response => response.json())
    .then(data => {
        mostrarResultado(data);
    })
    .catch(error => {
        console.error('Error al buscar cita:', error);
    });
});

function mostrarResultado(citaEncontrada) {
    var resultadoHTML = '<h2 class="text-xl font-bold mt-4">Resultado de la búsqueda:</h2>';
    resultadoHTML += '<p><strong>ID:</strong> ' + citaEncontrada.id + '</p>';
    resultadoHTML += '<p><strong>Nombre:</strong> ' + citaEncontrada.nombre + '</p>';
    resultadoHTML += '<p><strong>Fecha:</strong> ' + citaEncontrada.fecha + '</p>';
    resultadoHTML += '<p><strong>Especialidad:</strong> ' + citaEncontrada.especialidad + '</p>';
    resultadoHTML += '<p><strong>Número de Consultorio:</strong> ' + citaEncontrada.consultorio + '</p>';
    resultadoHTML += '<p><strong>Costo:</strong> ' + citaEncontrada.costo + '</p>';

    document.getElementById('resultado').innerHTML = resultadoHTML;
}