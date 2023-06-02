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

    precio.classList.remove('hidden')
    info_ext.classList.remove('hidden')

    carousel.classList.remove('hidden')
    btn_img.classList.remove('hidden')
}

function agregarHiddenInfPrc() {
    let precio = document.getElementById('precio_dv')
    let info_ext = document.getElementById('textArea')

    let carousel = document.getElementById('carousel')
    let btn_img = document.getElementById('btn_img')

    precio.classList.add('hidden')
    info_ext.classList.add('hidden')

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
    console.log(val)
    if (val === "0"){
        console.log('epico')
        return null
    }


    quitarHiddenInfPrc() 
    cargarPlaceHolder()
    cargarAnimaciones(cont)
    if (cont === 0){
        cont = 1
    }else{
        cont = 0
    }
});
