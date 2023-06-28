document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('tipoCuenta');
    selectElement.addEventListener('change', function() {
      var selectedOption = selectElement.options[selectElement.selectedIndex];
      var url = selectedOption.getAttribute('data-url');
      if (url) {
        let div = document.getElementById('resultado-carac')
        cargarURL(url, div);
      }
    });

    var btnF = document.getElementById('btnF');
    btnF.addEventListener('click', function(event) {
      event.preventDefault();
      var selectedOption = selectElement.options[selectElement.selectedIndex];
      var value = selectedOption.value
      var url = ''

      var divFiltros = document.getElementById("resultado-carac")

      var inputs =  divFiltros.querySelectorAll("input");
      var cantIn = inputs.length;
      var cantInIg = 0
      var ignorar = []
      var noIgnorar = []
      var noIgnorarValor = []

      inputs.forEach((input) => {

        var val = input.value

        if (val === ""){

          ignorar.push(input.id)
          cantInIg = cantInIg + 1
          return 
        }

        noIgnorar.push(input.id)
        noIgnorarValor.push(val)



      });

      console.log(noIgnorar)
      console.log(noIgnorarValor)

      if (cantInIg === cantIn){
        url = "aplicarFiltro/"+ value; 
      }else{

        text = 'tipo=' + value + '@'

        for (let i = 0; i < noIgnorar.length; i++) {
          text =  text + noIgnorar[i] + '=' + noIgnorarValor[i] + '@';  
          console.log(noIgnorar[i] + '=' + noIgnorarValor[i] + '@');
        }
        url = "filtroValores/" + text;
      }



      
      console.log(url)
      if (url) {
        let div = document.getElementById('cuenta')
        cargarURL(url, div);
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


