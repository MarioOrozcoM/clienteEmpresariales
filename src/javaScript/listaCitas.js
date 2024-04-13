// Función para hacer la solicitud al backend y mostrar la lista de pacientes
function mostrarListaCita() {
  fetch('http://localhost:8080/citas/listar') // Reemplazar 'URL_DEL_BACKEND/pacientes' con la URL correcta de la API en el backend que proporciona la lista de pacientes ingresados.
    .then(response => response.json())
    .then(data => {
      const tablaBody = document.getElementById('tablaPacientesBody');
      tablaBody.innerHTML = ''; // Limpia la tabla antes de llenarla con los datos

      data.forEach(cita => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td class="border px-4 py-2">${cita.numeroIdentificacion}</td>
            <td class="border px-4 py-2">${cita.nombrePaciente}</td>
            <td class="border px-4 py-2">${cita.fecha}</td>
            <td class="border px-4 py-2">${cita.tipoCita}</td>
            <td class="border px-4 py-2">${cita.costo}</td>
          `;
        tablaBody.appendChild(fila);
      });
    })
    .catch(error => {
      console.error('Error al obtener datos de pacientes:', error);
    });
}

function buscar() {
  const inputValue = document.getElementById('searchInput').value.trim().toLowerCase();
  console.log('ID de búsqueda:', inputValue); // Verifica el ID de búsqueda en la consola
  
  fetch(`http://localhost:8080/citas/obtener/${inputValue}`) 
      .then(response => response.json())
      .then(data => {
          const tablaBody = document.getElementById('tablaPacientesBody');
          tablaBody.innerHTML = ''; // Limpiar la tabla antes de llenarla con los datos
          
          // Verifica si data es un array
          if (Array.isArray(data)) {
              data.forEach(cita => {
                  const fila = document.createElement('tr');
                  fila.innerHTML = `
                      <td class="border px-4 py-2">${cita.numeroIdentificacion}</td>
                      <td class="border px-4 py-2">${cita.nombrePaciente}</td>
                      <td class="border px-4 py-2">${cita.fecha}</td>
                      <td class="border px-4 py-2">${cita.tipoCita}</td>
                      <td class="border px-4 py-2">${cita.costo}</td>
                  `;
                  tablaBody.appendChild(fila);
              });
          } else { // Si data no es un array, es un objeto de cita
              const fila = document.createElement('tr');
              fila.innerHTML = `
                  <td class="border px-4 py-2">${data.numeroIdentificacion}</td>
                  <td class="border px-4 py-2">${data.nombrePaciente}</td>
                  <td class="border px-4 py-2">${data.fecha}</td>
                  <td class="border px-4 py-2">${data.tipoCita}</td>
                  <td class="border px-4 py-2">${data.costo}</td>
              `;
              tablaBody.appendChild(fila);
          }
      })
      .catch(error => {
          console.error('Error al obtener datos de citas:', error);
      });
}

// Llamar a la función para mostrar la lista de citas al cargar la página
mostrarListaCita();

function filtrarPorCosto(minCosto, maxCosto) {
  // Obtener la tabla y las filas de la tabla
  var tabla = document.getElementById('tablaPacientesBody');
  var filas = tabla.getElementsByTagName('tr');

  // Iterar sobre las filas y mostrar u ocultar según el rango de costo
  for (var i = 0; i < filas.length; i++) {
      var celdaCosto = filas[i].getElementsByTagName('td')[4]; // Columna de Costo
      if (celdaCosto) {
          var costo = parseInt(celdaCosto.innerText, 10); // Obtener el costo como número

          // Mostrar la fila si el costo está en el rango especificado
          if (costo >= minCosto && costo <= maxCosto) {
              filas[i].style.display = '';
          } else {
              filas[i].style.display = 'none'; // Ocultar la fila si no cumple con el rango
          }
      }
  }
}

function buscar() {
  // Implementa la lógica para buscar según el ID o Nombre
}

