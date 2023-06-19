window.onload = function() {
    cards()
}


const selectTipoCuenta = document.getElementById('tipoCuenta');
const aplicarFiltroLink = document.getElementById('aplicarFiltroLink');

// Escuchar el evento de cambio del select
selectTipoCuenta.addEventListener('change', function() {
  // Obtener el valor seleccionado del select
  const tipoSeleccionado = selectTipoCuenta.value;

  // Construir la URL con el valor seleccionado como parámetro
  const url = "tienda/"+ tipoSeleccionado;

  // Asignar la URL al atributo href del enlace
  aplicarFiltroLink.href = url;
});