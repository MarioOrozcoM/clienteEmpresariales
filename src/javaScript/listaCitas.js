// Función para hacer la solicitud al backend y mostrar la lista de pacientes
function mostrarListaPacientes() {
    fetch('URL_DEL_BACKEND/pacientes') // Reemplazar 'URL_DEL_BACKEND/pacientes' con la URL correcta de la API en el backend que proporciona la lista de pacientes ingresados.
      .then(response => response.json())
      .then(data => {
        const tablaBody = document.getElementById('tablaPacientesBody');
        tablaBody.innerHTML = ''; // Limpia la tabla antes de llenarla con los datos
  
        data.forEach(paciente => {
          const fila = document.createElement('tr');
          fila.innerHTML = `
            <td class="border px-4 py-2">${paciente.id}</td>
            <td class="border px-4 py-2">${paciente.nombre}</td>
            <td class="border px-4 py-2">${paciente.fecha}</td>
            <td class="border px-4 py-2">${paciente.tipoCita}</td>
            <td class="border px-4 py-2">${paciente.costo}</td>
          `;
          tablaBody.appendChild(fila);
        });
      })
      .catch(error => {
        console.error('Error al obtener datos de pacientes:', error);
      });
  }

  
  // Función para buscar pacientes
  function buscar() {
    const inputValue = document.getElementById('searchInput').value.trim().toLowerCase();
    
    fetch('URL_DEL_BACKEND/pacientes') // Reemplazar 'URL_DEL_BACKEND/pacientes' con la URL correcta de la API en el backend que proporciona la lista de pacientes ingresados.
      .then(response => response.json())
      .then(data => {
        const tablaBody = document.getElementById('tablaPacientesBody');
        tablaBody.innerHTML = ''; // Limpiar la tabla antes de llenarla con los datos
  
        data.forEach(paciente => {
          // Filtrar por ID o por Nombre
          if (
            paciente.id.toString().toLowerCase().includes(inputValue) ||
            paciente.nombre.toLowerCase().includes(inputValue)
          ) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
              <td class="border px-4 py-2">${paciente.id}</td>
              <td class="border px-4 py-2">${paciente.nombre}</td>
              <td class="border px-4 py-2">${paciente.fecha}</td>
              <td class="border px-4 py-2">${paciente.tipoCita}</td>
              <td class="border px-4 py-2">${paciente.costo}</td>
            `;
            tablaBody.appendChild(fila);
          }
        });
      })
      .catch(error => {
        console.error('Error al obtener datos de pacientes:', error);
      });
  }
  
  // Llamar a la función para mostrar la lista de pacientes al cargar la página
  mostrarListaPacientes();  