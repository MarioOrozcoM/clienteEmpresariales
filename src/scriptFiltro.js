document.addEventListener('DOMContentLoaded', function() {
    const botonFiltro = document.querySelector('.filtro-btn');
    const opcionesFiltro = document.querySelector('.opciones');
  
    botonFiltro.addEventListener('click', function() {
      if (window.getComputedStyle(opcionesFiltro).display === 'none') {
        opcionesFiltro.style.display = 'block';
      } else {
        opcionesFiltro.style.display = 'none';
      }
    });
  });
  
  const rangoMinCosto = document.getElementById("rangoMinCosto");
  const rangoMaxCosto = document.getElementById("rangoMaxCosto");
  const outputMinCosto = document.getElementById("outputMinCosto");
  const outputMaxCosto = document.getElementById("outputMaxCosto");
  
  // Sincroniza los valores de los controles deslizantes y los campos de salida
  function actualizarValorCosto() {
    outputMinCosto.textContent = rangoMinCosto.value;
    outputMaxCosto.textContent = rangoMaxCosto.value;
  }
  
  rangoMinCosto.addEventListener("input", function() {
    if (parseInt(rangoMinCosto.value) > parseInt(rangoMaxCosto.value)) {
      rangoMaxCosto.value = rangoMinCosto.value;
      actualizarValorCosto();
    } else {
      actualizarValorCosto();
    }
  });
  
  rangoMaxCosto.addEventListener("input", function() {
    if (parseInt(rangoMaxCosto.value) < parseInt(rangoMinCosto.value)) {
      rangoMinCosto.value = rangoMaxCosto.value;
      actualizarValorCosto();
    } else {
      actualizarValorCosto();
    }
  });
  
  // Inicializa los valores de los campos de salida
  actualizarValorCosto();
  
  