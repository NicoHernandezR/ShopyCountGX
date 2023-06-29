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

function mostrarConfirmacion(event, id) {
  event.preventDefault(); // Evita que el enlace realice su acción predeterminada

  // Oculta todos los div de confirmación
  var confirmaciones = document.getElementsByClassName('confirmacion');
  var overlays = document.getElementsByClassName('encima');
  for (var i = 0; i < confirmaciones.length; i++) {
    confirmaciones[i].style.display = 'none';
  }

  for (var i = 0; i < overlays.length; i++) {
    overlays[i].style.display = 'none';
  }


  var overlay = document.getElementById('encima' + id)
  overlay.style.display = 'block';

  // Muestra el div de confirmación correspondiente al id del enlace
  var confirmacion = document.getElementById('confirmacion' + id);
  confirmacion.style.display = 'block';
  confirmacion.focus(); // Establece el enfoque en el div de confirmación
}

function cerrarConfirmacion(id) {
  var overlay = document.getElementById('encima' + id);
  overlay.style.display = 'none';
  var confirmacion = document.getElementById('confirmacion' + id);
  confirmacion.style.display = 'none';
}


function comprar(url) {

  div = document.getElementById('comprar')
  cargarURL(url, div)
  barra = document.getElementById('barra').innerHTML = ''
  filtros = document.getElementById('filtros').innerHTML = ''
  cuentas_carro = document.getElementById('cuentas_carro').innerHTML = ''

}