async function obtenerTasasDeCambio() {
    const url = `https://api.fastforex.io/fetch-multi?from=clp&to=clp,USD,EUR&api_key=78ed57430b-e04549ec35-rxclzb`;
  
    const options = {method: 'GET', headers: {accept: 'application/json'}};
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
  
      // Guardar los resultados en una variable
      const resultados = data.results;
  
      // Crear un elemento <select>
      const selectElement = document.createElement('select');
  
      // Iterar sobre los resultados y crear opciones correspondientes
      for (const moneda in resultados) {
        const opcion = document.createElement('option');
        opcion.value = resultados[moneda];
        opcion.text = moneda;
        selectElement.appendChild(opcion);
      }
  
      // Agregar el elemento <select> al documento
      document.body.appendChild(selectElement);
  
      // Obtener los elementos con la clase 'moneda'
      const elementosMoneda = document.getElementsByClassName('moneda');
  
      // Convertir los valores de los elementos a números de punto flotante
      const valoresOriginales = Array.from(elementosMoneda).map(elemento => parseFloat(elemento.dataset.valorOriginal));
  
      // Agregar un evento 'change' al elemento <select>
      selectElement.addEventListener('change', function() {
        const valorSeleccionado = parseFloat(selectElement.value);

  
        // Actualizar los valores de los elementos con la clase 'moneda'
        for (let i = 0; i < elementosMoneda.length; i++) {
          const elemento = elementosMoneda[i];

          const nuevoValor = valoresOriginales[i] * valorSeleccionado;

          elemento.textContent = nuevoValor.toFixed(2);
        }
      });
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  
  // Llamada a la función al cargar la página
  window.addEventListener('DOMContentLoaded', obtenerTasasDeCambio);