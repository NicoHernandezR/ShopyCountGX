



const tiposCuenta = ["Seleccionar","Steam", "CSGO", "Epic", "PlayStation","Xbox Live", "Switch", "Microsoft", "Riot","Battle Net"];
const opcionesCuenta = {
  "Seleccionar": [],
  "Steam": [["Juegos",0,3000], ["Nivel Cuenta",0,1000]],
  "CSGO": [["MM", 0, 18], ["GC",0,21], ["Faceit",0,10]],
  "Epic": [["Juegos",0,3000]],
  "PlayStation": [["Juegos",0,3000], ["Suscripciones",0,12]],
  "Xbox Live": [["Juegos",0,3000], ["Suscripciones",0,12]],
  "Switch": [["Juegos",0,3000], ["Suscripciones",0,12]],
  "Microsoft": [["Juegos",0,3000]],
  "Riot": [["Juegos",0,3000]],
  "Battle Net": [["Juegos",0,3000], ]
};






function crearSelect(opciones) {
  const select = document.createElement("select");

  if (Array.isArray(opciones)) {
    opciones.forEach(function(opcion) {
      const option = document.createElement("option");
      option.value = opcion;
      option.text = opcion;
      select.appendChild(option);
    });
  }

  return select;
}

function cargarPlaceHolder(i) {
  let carruselInner = carrusel.querySelector('.carousel-inner');
  let img = document.createElement('img');
  img.classList.add('d-block', 'img_size');
  img.src = '../img/placeholderCarusel.jpg';
  img.id = i
  img.style.width = calcularAnchoImagen();
  img.style.height = calcularLargoImagen();
  
  let item = document.createElement('div');
  item.classList.add('carousel-item');
  item.classList.add('active');
  item.appendChild(img);
  carruselInner.appendChild(item);

}

function limpiarCarusel() {
  let carImg = document.getElementById('cinner');
  let imgs = document.querySelectorAll('.carousel-item')
  //console.log(imgs)
  for (let i = 0; i < imgs.length; i++) {
    carImg.removeChild(imgs[i]);
    
  }
}

function cargarDestacar(i, nom) {
  let sectionDestacar = document.getElementById('destacar')
  let op =  document.createElement('option')
  op.value = i + 1;
  op.text = nom
  sectionDestacar.appendChild(op)
}

function limpiarDestacar() {
  let sectionDestacar = document.getElementById('destacar')
  sectionDestacar.innerHTML = ''
}

function cargarDestacarDefault() {
  let sectionDestacar = document.getElementById('destacar')
  let op =  document.createElement('option')
  op.value = 0;
  op.text = 'Ninguna'
  sectionDestacar.appendChild(op)
}

window.onload = function() {
    const inputFile = document.getElementById("input-file");

    let primerSelect = document.getElementById("tipoCuenta");
    let opcionesCuentas = document.getElementById("opcionesCuenta");
    let txtExtra = document.getElementById("textArea")
    let info_extra_lbl = document.getElementById('info_extra_lbl');
    let info_extra = document.getElementById('info_extra')
    let btn_img = document.getElementById("btn_img");
    let btnimgdiv = document.getElementById("btnimgdiv");
    let destacar_div = document.getElementById('destacar_div')


    let destacar_lbl =     document.getElementById('destacar_lbl')
    let destacar_select = document.getElementById('destacar')
    let precio = document.getElementById("precio")
    let precio_dv = document.getElementById("precio_dv")
    let precio_lbl = document.getElementById("precio_lbl")
    let carousel = document.getElementById('carousel')
    let cont = 0;
    cargarPlaceHolder(1)



    tiposCuenta.forEach(function(tipo, index) {
      let option = document.createElement("option");
      option.value = index + 1;
      option.text = tipo;
      primerSelect.appendChild(option);
    });

    primerSelect.addEventListener("change", function() {

      cambiarMgrPag('1')
      esconderMensajesError()
      limpiarDestacar()
      cargarDestacarDefault()
      // Obtener la opción seleccionada en el primer select
      let tipoCuentaSeleccionada = primerSelect.value;
      opcionesCuentas.innerHTML = ""
      // Obtener las opciones correspondientes del objeto opcionesCuenta
      let opcionesCuentaSeleccionada = opcionesCuenta[tiposCuenta[tipoCuentaSeleccionada - 1]];

    
      // Crear el segundo select
    
      // Agregar las opciones al segundo select
      opcionesCuentaSeleccionada.forEach(function(option, index) {
        let lbl = document.createElement("label");
        let lblError = document.createElement("label");
        let inp = document.createElement("input");
        let div = document.createElement("div");
        
        cargarDestacar(index, option[0])


        lbl.textContent = option[0];
        inp.type = "number"
        inp.id = option[0];
        inp.name = option[0];
        inp.min = option[1];
        inp.max = option[2];
        inp.placeholder = 0;
    
        lblError.id = 'error' + option[0];
    
        lbl.classList.add("load")
        inp.classList.add("load")
        lbl.classList.add("col-6")
        inp.classList.add("col-6")
        lbl.classList.add("col-md-6")
        inp.classList.add("col-md-6")
        inp.classList.add("inp_form")


        lblError.classList.add('col-12')
        //lblError.classList.add('col-md-6')
        lblError.classList.add('hidden')
        lblError.classList.add('rigth')
        lbl.classList.add("r_lbl")
        lblError.style.color = 'red'


        div.appendChild(lbl);
        div.appendChild(inp);
        div.appendChild(lblError);

        div.classList.add("container-fluid", "cont_imp")
        div.classList.add("pad-bot-opt")

        opcionesCuentas.appendChild(div);
      });
    



      // Mostrar el segundo select en el contenedor correspondiente
      if (opcionesCuentaSeleccionada.length > 0) {
      //  segundoSelectContainer.style.display = 'block';
        let errortipocuenta = document.getElementById("errortipocuenta")
        errortipocuenta.classList.add('hidden')
        txtExtra.classList.remove("hidden")
        btn_img.classList.remove("hidden")
        precio_dv.classList.remove("hidden")
        carousel.classList.remove("hidden")
        destacar_div.classList.remove("hidden")

      } else {
        limpiarFormulario() 
      }
      

      if (cont === 0){
        precio_lbl.classList.remove("reload")
        precio.classList.remove("reload")
        info_extra_lbl.classList.remove("reloadextra")
        info_extra.classList.remove("reloadextratxt")
        carousel.classList.remove("reloadcarusel")
        btnimgdiv.classList.remove("reloadbtnimg")
        destacar_lbl.classList.remove("reload")
        destacar_select.classList.remove("reload")

        precio_lbl.classList.add("load")
        precio.classList.add("load")
        info_extra_lbl.classList.add("loadextra")
        info_extra.classList.add("loadextratxt")
        carousel.classList.add("loadcarusel")
        btnimgdiv.classList.add("loadbtnimg")
        destacar_lbl.classList.add("load")
        destacar_select.classList.add("load")
        
        cont = 1;
      }else{
        precio_lbl.classList.remove("load")
        precio.classList.remove("load")
        info_extra_lbl.classList.remove("loadextra")
        info_extra.classList.remove("loadextratxt")
        carousel.classList.remove("loadcarusel")
        btnimgdiv.classList.remove("loadbtnimg")
        destacar_lbl.classList.remove("load")
        destacar_select.classList.remove("load")

        precio_lbl.classList.add("reload")
        precio.classList.add("reload")
        info_extra_lbl.classList.add("reloadextra")
        info_extra.classList.add("reloadextratxt")
        carousel.classList.add("reloadcarusel")
        btnimgdiv.classList.add("reloadbtnimg")
        destacar_lbl.classList.add("reload")
        destacar_select.classList.add("reload")
        
        cont = 0;
      }


    });
  
  


  };

function esconderMensajesError() {
  let lblErrorExtra = document.getElementById('errorextra');
  let lblError = document.getElementById('errorprecio');
  let lblErrorImg = document.getElementById('errorImg');
  lblErrorExtra.classList.add('hidden')
  lblError.classList.add('hidden')
  lblErrorImg.classList.add('hidden')
}

function temblar() {
  document.body.classList.add('shake');
  setTimeout(() => {
    document.body.classList.remove('shake');
  }, 500);
}

async function getCuentas() {
  let url = '../json/cuentasVender.json';
  let response = await fetch(url);
  let data = await response.json();
  let cuentas = data.Cuentas;
  //let LastCuenta = cuentas[cuentas.length - 1].id;
  return cuentas;
}

async function InsertarCuenta(t_id, arrayCarac, arrayDatos, desc, precio, infoExtra, arrayImgs){
  let cuentas = await getCuentas();
  let lastId = cuentas[cuentas.length - 1].id;
  let caracteristicas = {}
  for (let i = 0; i < arrayCarac.length; i++) {
    let nombre = arrayCarac[i]
    let valor = arrayDatos[i]
    caracteristicas[nombre] = valor
    
  }
  let nuevaCuenta = {
    "id": parseInt(lastId) + 1,
    "tipoCuenta": t_id,
    "Caracteristicas": caracteristicas,
    "Carac Desc": desc,
    "Precio": precio,
    "InfoExtra": infoExtra,
    "Imgs": arrayImgs
  }
  cuentas.push(nuevaCuenta)
  let contenidoActualizado = JSON.stringify(cuentas, null, 2);
  let archivoNuevo = new File([contenidoActualizado], 'cuentas2.json', {
    type: 'application/json'
  })
  localStorage.setItem('cuentas', JSON.stringify(cuentas))
  let fs = window.requestFileSystemSync(window.TEMPORARY, 1024*1024);

  let cuentasJson = JSON.stringify(cuentas);

  let blob = new Blob([cuentasJson], {type: "application/json"});

  let fileName = "../cuentasVender.json";

  fs.root.getFile(fileName, {create: true}, function(fileEntry) {
    fileEntry.createWriter(function(fileWriter) {
      fileWriter.write(blob);
      console.log("El archivo JSON se ha creado exitosamente.");
    }, function(error) {
      console.log("Error al escribir en el archivo:", error);
    });
  }, function(error) {
    console.log("Error al crear el archivo:", error);
  });
    console.log('Actualizado :D')
    
  }
/*
async function llamarLastId() {
  let lastId = await getLastId();

}
*/


function validarFormulario() {

  let tCuenta = document.getElementById('tipoCuenta');
  let tcuenta2 = tiposCuenta[tCuenta.value - 1]
  let precio = document.getElementById('precio');
  let infoExtra = document.getElementById('info_extra');
  let caracDesc = document.getElementById('destacar')
  let arrayDatos = opcionesCuenta[tcuenta2]
  let arrayDatos2 = []
  let errores = 0
  

  let errortipocuenta = document.getElementById("errortipocuenta")
  if (arrayDatos.length < 1){
    errortipocuenta.textContent = "Seleccione algun tipo de cuenta a vender.";
    errortipocuenta.classList.remove('hidden')
    temblar()

    return false;
  }else{
    errortipocuenta.classList.add('hidden')
  }

  arrayDatos.forEach(function(e, ix) {

    let hname = e[0]
    let html_comp = document.getElementById(hname)
    let hvalue = html_comp.value;
    let hmin = parseInt(html_comp.min) 
    let hmax = parseInt(html_comp.max)
    let hid = html_comp.id; 
    let val = validarCampos(hvalue, hmin, hmax, hid)

    if (val === false){
      let hid = html_comp.id;
      let lblError = document.getElementById('error'+hid);
      lblError.classList.remove('hidden')
    }else{
      arrayDatos2.push(hvalue)
    }


  });

  let hvalue = precio.value;
  let hmin = parseInt(precio.min) 
  let hmax = parseInt(precio.max)
  let hid = 'precio'; 
  let val = validarCampos(hvalue, hmin, hmax, hid)

  if (val === false){
    let lblError = document.getElementById('error'+hid);
    lblError.classList.remove('hidden')
    errores = errores + 1;
  }

  let lblErrorExtra = document.getElementById('errorextra');
  if (infoExtra.value.trim() === ''){
    lblErrorExtra.textContent = 'Tiene que proporcionar informacion extra acerca de la cuenta.';
    lblErrorExtra.classList.remove('hidden')
    errores = errores + 1;
  }else{
    lblErrorExtra.classList.add('hidden')
  }

  let lblErrorImg = document.getElementById('errorImg');
  if (selectedImages.length < 1){

    lblErrorImg.textContent = 'Suba entre 1 a 5 imagenes para dar informacion sobre la cuenta.';
    lblErrorImg.classList.remove('hidden')
    errores = errores + 1;
  }else{
    lblErrorImg.classList.add('hidden')
  }

  if (errores > 0){
    temblar()
    return false;
  }


 
  return true;


  }

function limpiarFormulario() {
  cambiarMgrPag('0')
  let tCuenta = document.getElementById('tipoCuenta');
  let tcuenta2 = tiposCuenta[tCuenta.value - 1]
  let precio = document.getElementById('precio');
  let infoExtra = document.getElementById('info_extra');
  let carousel = document.getElementById('carousel')
  let arrayDatos = opcionesCuenta[tcuenta2]
  let sectionDestacar = document.getElementById('destacar')
  let destacar_div = document.getElementById('destacar_div')

  let txtExtra = document.getElementById("textArea")
  let btn_img = document.getElementById("btn_img");
  let precio_dv = document.getElementById("precio_dv")
  let opCuenta = document.getElementById('opcionesCuenta')

  arrayDatos.forEach(function(e, ix) {

    let html_comp = document.getElementById(e[0])
    html_comp.value = html_comp.min



  });

  precio.value = '';
  sectionDestacar.value = "0"
  infoExtra.value = ''
  selectedImages = []
  tCuenta.value = 1
  txtExtra.classList.add("hidden")
  btn_img.classList.add("hidden")
  precio_dv.classList.add("hidden")
  carousel.classList.add("hidden")
  destacar_div.classList.add("hidden")
  opCuenta.innerHTML = ''
  esconderMensajesError()
  limpiarCarusel()
  cargarPlaceHolder(2)
  borrarArchivosMalos(null)

}

function validarCampos(hvalue, hmin, hmax, hid) {

  let hvalueStr = hvalue.toString()

  let lblError = document.getElementById('error'+hid);

  if (hvalue === ''){
    lblError.textContent = 'Formato Incorrecto.';
    return false;
  }

  if (hvalueStr.includes('e') || hvalueStr.includes('E')){
    lblError.textContent = 'No puede incluir la letra e.';
    return false;
  }

  if (hvalueStr.startsWith('0') && hvalueStr.length > 1){
    lblError.textContent = 'No puede empezar con 0.';
    return false;
  }

  let hvalueInt = parseInt(hvalue);

  if (hvalueInt < hmin){
    lblError.textContent = 'No puede ser menor a ' + hmin + '.';
    return false
  }
  
  if (hvalueInt > hmax){
    lblError.textContent = 'No puede ser mayor a ' + hmax + '.';
    return false
  }

  lblError.classList.add('hidden')
  return true;

}