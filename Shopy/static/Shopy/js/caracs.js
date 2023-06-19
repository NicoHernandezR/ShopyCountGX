document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('tipoCuenta');
    selectElement.addEventListener('change', function() {
      var selectedOption = selectElement.options[selectElement.selectedIndex];
      var url = selectedOption.getAttribute('data-url');
      if (url) {
        cargarCarac(url);
      }
    });

    var btnF = document.getElementById('btnF');
    btnF.addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir la acción predeterminada del botón
      var selectedOption = selectElement.options[selectElement.selectedIndex];
      value = selectedOption.value
      url = "aplicarFiltro/"+ value; // Obtener el valor seleccionado del option
      print(url)
      if (url) {
        cargarFiltro(url);
      }
    });


  });
  
function cargarCarac(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var resultado = xhr.responseText;
        document.getElementById('resultado-carac').innerHTML = resultado;
      }
    };
    xhr.send();
}



function cargarFiltro(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var resultado = xhr.responseText;
      document.getElementById('cuenta').innerHTML = resultado;
    }
  };
  xhr.send();
}