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



function eliminarDelCarro(event, url) {

  div = document.getElementById('cuentas')
  cargarURL(url, div)

}