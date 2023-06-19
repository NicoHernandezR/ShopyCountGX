document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('tipoCuenta');
    selectElement.addEventListener('change', function() {
      var selectedOption = selectElement.options[selectElement.selectedIndex];
      var url = selectedOption.getAttribute('data-url');
      if (url) {
        cargarCarac(url);
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