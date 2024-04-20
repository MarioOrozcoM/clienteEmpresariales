document.addEventListener('DOMContentLoaded', function() {
    const btnAceptar = document.getElementById('btnAceptar');

    btnAceptar.addEventListener('click', function() {
        const filtroID = document.getElementById('filtroID').value;

        // Realizar la solicitud al backend para obtener el consultorio por ID
        fetch(`http://localhost:8080/consultorios/${filtroID}`)
            .then(response => response.json())
            .then(data => {
                // Limpiar la tabla de consultorios
                const tablaConsultoriosBody = document.getElementById('tablaConsultoriosBody');
                tablaConsultoriosBody.innerHTML = '';

                // Verificar si se encontró el consultorio
                if (data) {
                    // Crear una fila para mostrar el consultorio encontrado
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td class="px-4 py-2 border">${data.id}</td>
                        <td class="px-4 py-2 border">${data.nombre}</td>
                    `;

                    // Agregar la fila a la tabla
                    tablaConsultoriosBody.appendChild(newRow);
                } else {
                    // Mostrar un mensaje indicando que no se encontró el consultorio
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td class="px-4 py-2 border" colspan="2">No se encontró ningún consultorio con ese ID</td>
                    `;

                    // Agregar la fila a la tabla
                    tablaConsultoriosBody.appendChild(newRow);
                }
            })
            .catch(error => {
                console.error('Error al obtener el consultorio:', error);
            });
    });
});
