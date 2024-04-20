document.addEventListener("DOMContentLoaded", function() {
  const filtroBtn = document.querySelector(".filtro-btn");
  const filtroContainer = document.querySelector(".opciones");

  // Ocultar inicialmente el contenedor de filtros
  filtroContainer.style.display = "none";

  // Mostrar contenedor de filtros al hacer clic en el botón de filtro
  filtroBtn.addEventListener("click", function() {
      if (filtroContainer.style.display === "none") {
          filtroContainer.style.display = "block";
      } else {
          filtroContainer.style.display = "none";
      }
  });

  const btnAceptar = document.getElementById("btnAceptar");
  btnAceptar.addEventListener("click", function() {
      const id = document.getElementById("filtroID").value;
      const nombre = document.getElementById("filtroNombre").value;
      const costoMinimo = document.getElementById("filtroCostoMin").value || 0;
      const costoMaximo = document.getElementById("filtroCostoMax").value;
      const tipoCita = document.getElementById("tipoCita").value;

      const queryParams = new URLSearchParams({
          id: id,
          nombre: nombre,
          costoMinimo: costoMinimo,
          costoMaximo: costoMaximo,
          tipo: tipoCita
      });

      let url;
      if (id || nombre || costoMinimo || costoMaximo || tipoCita) {
          url = `http://localhost:8080/citas?${queryParams}`;
      } else {
          url = 'http://localhost:8080/citas/todas-las-citas';
      }

      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(citas => {
              // Limpia la tabla de citas
              const tablaPacientesBody = document.getElementById("tablaPacientesBody");
              tablaPacientesBody.innerHTML = "";

              // Agrega las citas filtradas a la tabla
              citas.forEach(cita => {
                  const fila = document.createElement("tr");
                  fila.innerHTML = `
                      <td>${cita.id}</td>
                      <td>${cita.nombre}</td>
                      <td>${cita.costo}</td>
                      <td>${cita.tipo}</td>
                  `;
                  tablaPacientesBody.appendChild(fila);
              });
          })
          .catch(error => console.error('Error al obtener citas:', error));
  });
});
