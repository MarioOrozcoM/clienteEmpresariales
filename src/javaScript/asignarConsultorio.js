document.getElementById('guardar').addEventListener('click', function() {
    const consultorioId = document.getElementById('consultorio').value;

    // Función para asignar el consultorio a la cita
    function asignarConsultorioACita(consultorioId) {
        fetch('http://localhost:8080/citas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ consultorioId: consultorioId }) // Enviar el ID del consultorio en la solicitud
        })
        .then(response => {
            if (response.ok) {
                console.log(`Consultorio ${consultorioId} asignado a la cita correctamente.`);
            } else {
                console.error('Error al asignar el consultorio a la cita.');
            }
        })
        .catch(error => {
            console.error('Error al realizar la asignación:', error);
        });
    }

    asignarConsultorioACita(consultorioId);
});