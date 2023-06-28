function mostrarCuadrado(event) {
    event.preventDefault();
  
    var overlay = document.createElement("div");
    overlay.className = "overlay";
  
    var cuadrado = document.createElement("div");
    cuadrado.className = "square";
    var mensajeA = document.getElementById('mensajeURL')
    cuadrado.innerText = mensajeA.getAttribute('data-url');
  
    overlay.appendChild(cuadrado);
    document.body.appendChild(overlay);
  
    setTimeout(function() {
      overlay.remove();
    }, 3000);
}