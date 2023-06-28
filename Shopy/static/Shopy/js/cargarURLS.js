function cargarURL(url, div){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var resultado = xhr.responseText;
        div.innerHTML = resultado;
      }
    };
    xhr.send();
  }

function eliminarCuenta(event, url) {
    event.preventDefault();  // Evita que se siga el enlace por defecto
  
    // Aquí puedes realizar las acciones que deseas con la URL
    // Por ejemplo, puedes enviar una petición AJAX para eliminar la cuenta
  
    // Ejemplo de petición AJAX utilizando jQuery
  
    div = document.getElementById('cuentas_usuario')
    cargarURL(url, div)
    console.log(url)
  }
  
  
  function agregarAlCarro(event, url) {
    event.preventDefault();  // Evita que se siga el enlace por defecto
  
    // Aquí puedes realizar las acciones que deseas con la URL
    // Por ejemplo, puedes enviar una petición AJAX para eliminar la cuenta
  
    // Ejemplo de petición AJAX utilizando jQuery
    div = document.getElementById('mensaje')
    cargarURL(url, div)
    console.log(url)

  }