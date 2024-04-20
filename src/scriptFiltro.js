console.log("El archivo scriptFiltro.js se ha cargado correctamente.");

document.addEventListener("DOMContentLoaded", function () {
  const btnFiltro = document.querySelector('.filtro-btn');
  const opciones = document.querySelector('.opciones');
  const tablaPacientesBody = document.getElementById('tablaPacientesBody');

  btnFiltro.addEventListener('click', function () {
      if (opciones.style.display === 'none') {
          opciones.style.display = 'block';
      } else {
          opciones.style.display = 'none';
      }
  });

  const btnAceptar = document.getElementById('btnAceptar');
  btnAceptar.addEventListener('click', function () {
      const filtroID = document.getElementById('filtroID').value;
      const filtroNombre = document.getElementById('filtroNombre').value;
      const filtroCostoMin = parseFloat(document.getElementById('filtroCostoMin').value);
      const filtroCostoMax = parseFloat(document.getElementById('filtroCostoMax').value);
      const tipoCita = document.getElementById('tipoCita').value;

      // Construir la URL de la petición GET al backend
      let url = `http://localhost:8080/citas?`;
      if (filtroID.trim() !== '') url += `id=${filtroID}&`;
      if (filtroNombre.trim() !== '') url += `nombre=${filtroNombre}&`;
      if (!isNaN(filtroCostoMin)) url += `costoMinimo=${filtroCostoMin}&`;
      if (!isNaN(filtroCostoMax)) url += `costoMaximo=${filtroCostoMax}&`;
      if (tipoCita.trim() !== '') url += `tipo=${tipoCita}`;

      // Realizar la petición GET al backend
      fetch(url)
          .then(response => {
              if (response.ok) {
                  return response.json();
              }
              throw new Error('Error en la petición');
          })
          .then(data => {
              // Limpiar la tabla antes de agregar nuevas filas
              tablaPacientesBody.innerHTML = '';

              // Agregar filas a la tabla con los datos de las citas recibidas
              data.forEach(cita => {
                  const fila = document.createElement('tr');
                  fila.innerHTML = `
                      <td>${cita.id}</td>
                      <td>${cita.nombre}</td>
                      <td>${cita.fecha}</td>
                      <td>${cita.tipo}</td>
                      <td>${cita.costo}</td>
                  `;
                  tablaPacientesBody.appendChild(fila);
              });
          })
          .catch(error => {
              console.error('Error:', error);
              // Aquí puedes manejar el error y notificar al usuario si ocurrió algún problema
          });
  });
});
