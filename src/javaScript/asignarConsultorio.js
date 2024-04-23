function asignarConsultorioACita(citaId, consultorioId) {
    fetch(`http://localhost:8080/citas/${citaId}/asignar-consultorio?idConsultorio=${consultorioId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            console.log(`Consultorio ${consultorioId} asignado a la cita ${citaId} correctamente.`);
        } else {
            console.error('Error al asignar el consultorio a la cita.');
        }
    })
    .catch(error => {
        console.error('Error al realizar la asignación:', error);
    });
}
