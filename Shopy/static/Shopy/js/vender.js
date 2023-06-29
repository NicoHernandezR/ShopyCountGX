var selectTipo = document.querySelectorAll('select[name="tipoCuenta"]')[0];
var cont = 0
var divList = []; // Variable para almacenar los elementos <div> ya eliminados

function agregarOpt(value, text, select){
    let op = document.createElement('option')
    op.value = value
    op.text = text
    select.appendChild(op)
}

/*
function crearDestacar(val){
    let select = document.getElementById('destacar')
    select.innerHTML = ""

    agregarOpt("0","Ninguna",select)

    for (let i = divs.length - 1; i >= 0; i--) {
        let div = divs[i];
        let divId = div.getAttribute('id');
      
        if (divId !== val) {
                continue
        }

        agregarOpt(divId,div.getAttribute('name'),select)
    }
}
*/

function quitarHiddenInfPrc() {
    let precio = document.getElementById('precio_dv')
    let info_ext = document.getElementById('textArea')

    let carousel = document.getElementById('carousel')
    let btn_img = document.getElementById('btn_img')
    let btns = document.getElementById('btns')

    precio.classList.remove('hidden')
    info_ext.classList.remove('hidden')
    btns.classList.remove('hidden')

    carousel.classList.remove('hidden')
    btn_img.classList.remove('hidden')
}

function agregarHiddenInfPrc() {
    let precio = document.getElementById('precio_dv')
    let info_ext = document.getElementById('textArea')

    let carousel = document.getElementById('carousel')
    let btn_img = document.getElementById('btn_img')
    let btns = document.getElementById('btns')

    precio.classList.add('hidden')
    info_ext.classList.add('hidden')
    btns.classList.add('hidden')

    carousel.classList.add('hidden')
    btn_img.classList.add('hidden')
}


function cargarAnimaciones(val){

    let info_extra_lbl = document.getElementById('info_extra_lbl');
    let info_extra = document.getElementById('info_extra')
    let btnimgdiv = document.getElementById("btnimgdiv");

    let precio = document.getElementById("precio")
    let precio_lbl = document.getElementById("precio_lbl")
    let carousel = document.getElementById('carousel')

    if (val === 0){
        precio_lbl.classList.remove("reload")
        precio.classList.remove("reload")
        info_extra_lbl.classList.remove("reloadextra")
        info_extra.classList.remove("reloadextratxt")
        carousel.classList.remove("reloadcarusel")
        btnimgdiv.classList.remove("reloadbtnimg")


        precio_lbl.classList.add("load")
        precio.classList.add("load")
        info_extra_lbl.classList.add("loadextra")
        info_extra.classList.add("loadextratxt")
        carousel.classList.add("loadcarusel")
        btnimgdiv.classList.add("loadbtnimg")

      }else{
        precio_lbl.classList.remove("load")
        precio.classList.remove("load")
        info_extra_lbl.classList.remove("loadextra")
        info_extra.classList.remove("loadextratxt")
        carousel.classList.remove("loadcarusel")
        btnimgdiv.classList.remove("loadbtnimg")


        precio_lbl.classList.add("reload")
        precio.classList.add("reload")
        info_extra_lbl.classList.add("reloadextra")
        info_extra.classList.add("reloadextratxt")
        carousel.classList.add("reloadcarusel")
        btnimgdiv.classList.add("reloadbtnimg")

      }
}

function calcularAnchoImagen() {
    // Obtenemos la resolución de la pantalla
    let screenWidth = window.innerWidth;
  
    // Calculamos el ancho de la imagen
    let imageWidth = screenWidth * 0.5;
  
    if (imageWidth > 380){
      imageWidth = 380;
    }
  
    if (imageWidth < 261){
      imageWidth = 261;
    }
  
    // Asignamos el ancho calculado a la imagen
    return `${imageWidth}px`;
  }

function cargarPlaceHolder() {
    let carousel = document.getElementById('carousel')
    let carruselInner = carousel.querySelector('.carousel-inner');
    carruselInner.innerHTML = ''
    inputImagen.value = "";
    let img = document.createElement('img');
    img.classList.add('d-block', 'img_size', 'placeholderCar');
    img.style.width = calcularAnchoImagen() ;
    img.style.height = '304px';
    
    let item = document.createElement('div');
    item.classList.add('carousel-item');
    item.classList.add('active');
    item.appendChild(img);
    carruselInner.appendChild(item);
  
  }
  

selectTipo.addEventListener('change', function(event) {
    let val = selectTipo.value;
    if (val === "0"){
        console.log('epico')
        return null
    }

    var errorextra = document.getElementById('errorextra');
    errorextra.classList.add('hidden')
    var errorPrecio = document.getElementById("errorprecio")
    errorPrecio.classList.add('hidden')
    var lblError = document.getElementById('errorImg');
    lblError.classList.add('hidden')
  
    quitarHiddenInfPrc() 
    cargarPlaceHolder()
    cargarAnimaciones(cont)
    if (cont === 0){
        cont = 1
    }else{
        cont = 0
    }
});

function validarLetras(string) {
  // Verificar si el string contiene solo números

  console.log(string)
  if (string.length === 0) {
    return true;
  }

  var numerosValidos = /^[0-9]+$/;
  if (!numerosValidos.test(string)) {
    return false;
  }

  return true;
}

function validarCantidades(val,min,max,error,nom) {
  if (isNaN(val)) {

    error.textContent = 'El campo ' + nom + ' no puede quedar en blanco'
    error.classList.remove('hidden');
    return false
    
  }else if (!(val % 1 === 0)) {

    error.textContent = 'El campo ' + nom + ' no puede ser un decimal'
    error.classList.remove('hidden');
    return false

  }else if (!(val >= min)) {
    
    error.textContent = 'El campo ' + nom + ' no puede ser menor a ' + min
    error.classList.remove('hidden');
    return false

  }else if (!(val <= max)) {

    error.textContent = 'El campo ' + nom + ' no puede ser mayor a ' + max
    error.classList.remove('hidden');
    return false

  }

  return true

}


function validarFormulario() {

    var selectTPC = document.getElementById('tipoCuenta')
    var valorTPC = selectTPC.value;
    var divsCaracs = document.querySelectorAll("[id='" + valorTPC + "']");
    var cantErrores = 0;


    //Aqui valido que cada campo de Caracteristicas del tipo de cuenta este correcto
    divsCaracs.forEach(function(e) {
      var input = e.querySelector("input");
      var min = parseInt(input.min, 10);
      var max = parseInt(input.max, 10);
      var valor = input.value;
      var lblError = e.querySelector("[id='error']")
      lblError.classList.add('hidden')
      var nom = input.name



      if (!validarLetras(valor)){
        lblError.textContent = 'El campo ' + nom + ' SOLO puede tener NUMEROS'
        lblError.classList.remove('hidden');
        cantErrores = cantErrores + 1;
        return
        
      }else{
        var valor = parseInt(input.value, 10);
      }

      if (validarCantidades(valor,min,max,lblError,nom)){
        return
      }

      cantErrores = cantErrores + 1;
      

    });

    //Aqui se valida que el precio este correcto
    var precio = document.getElementById("precio");
    var errorPrecio = document.getElementById("errorprecio")
    
    if (!validarCantidades(parseInt(precio.value), parseInt(precio.min), parseInt(precio.max), errorPrecio, 'Precio')){
      cantErrores = cantErrores + 1
    }


    var info_extra = document.getElementById('info_extra');
    var info_cont = info_extra.value.trim();
    var errorextra = document.getElementById('errorextra');
    errorextra.classList.add('hidden')


    if (info_cont.length < 25 || info_cont.length > 501){
      errorextra.classList.remove('hidden')
      errorextra.textContent = 'La informacion extra tiene que contener entre 25 a 500 caracteres';
      cantErrores = cantErrores + 1
    }

    var lblError = document.getElementById('errorImg');
    lblError.classList.add('hidden')

    if (inputImagen.files.length < 1){
      lblError.textContent ='Suba entre 1 a 5 imagenes para dar informacion sobre la cuenta.'
      lblError.classList.remove('hidden')
      cantErrores = cantErrores + 1
    }

    console.log(inputImagen.files.length)

    if (cantErrores === 0){
      document.getElementById('formularioCuenta').submit()
    }
    return;
    
    

    
}

function limpiarFormulario(){
  agregarHiddenInfPrc()

  divCaracs = document.getElementById('resultado-carac').innerHTML = ''
  selectTipo.value = '0'
  precio = document.getElementById('precio')
  precio.value = ''
  info_extra = document.getElementById('info_extra')
  info_extra.value = ''
  cargarPlaceHolder()
  var lblError = document.getElementById('errorImg');
  lblError.classList.add('hidden')

}