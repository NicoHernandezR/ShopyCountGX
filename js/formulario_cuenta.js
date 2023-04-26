


const tiposCuenta = ["Seleccionar","Steam", "CSGO", "Epic", "PlayStation","Xbox Live"];
const opcionesCuenta = {
  "Seleccionar": [],
  "Steam": [["Juegos",0,3000], ["Nivel Cuenta",0,1000]],
  "CSGO": [["MM", 0, 18], ["GC",0,21], ["Faceit",0,10]],
  "Epic": [["Juegos",0,3000]],
  "PlayStation": [["Juegos",0,3000], ["Suscripciones",0,12]],
  "Xbox Live": [["Juegos",0,3000], ["Suscripciones",0,12]]
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


window.onload = function() {
    const inputFile = document.getElementById("input-file");

    let primerSelect = document.getElementById("tipoCuenta");
    let opcionesCuentas = document.getElementById("opcionesCuenta");
    let txtExtra = document.getElementById("textArea")
    let info_extra_lbl = document.getElementById('info_extra_lbl');
    let info_extra = document.getElementById('info_extra')
    let btn_img = document.getElementById("btn_img");
    let precio = document.getElementById("precio")
    let precio_dv = document.getElementById("precio_dv")
    let precio_lbl = document.getElementById("precio_lbl")
    let carousel = document.getElementById('carousel')
    let cont = 0;


    tiposCuenta.forEach(function(tipo, index) {
      let option = document.createElement("option");
      option.value = index + 1;
      option.text = tipo;
      primerSelect.appendChild(option);
    });

    primerSelect.addEventListener("change", function() {
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

        div.classList.add("container-fluid")
        div.classList.add("pad-bot-opt")

        opcionesCuentas.appendChild(div);
      });
    



      // Mostrar el segundo select en el contenedor correspondiente
      if (opcionesCuentaSeleccionada.length > 0) {
      //  segundoSelectContainer.style.display = 'block';
        txtExtra.classList.remove("hidden")
        btn_img.classList.remove("hidden")
        precio_dv.classList.remove("hidden")
        carousel.classList.remove("hidden")

      } else {
        txtExtra.value = ""
        precio.value= ''
        txtExtra.classList.add("hidden")
        btn_img.classList.add("hidden")
        precio_dv.classList.add("hidden")
        carousel.classList.add("hidden")
        let carImg = document.getElementById('cinner');
        let imgs = document.querySelectorAll('.carousel-item')
        console.log(imgs)
        for (let i = 0; i < imgs.length; i++) {
          carImg.removeChild(imgs[i]);
          
        }
        //carruselInner.innerHTML = ''; 


      //  segundoSelectContainer.style.display = 'none';
      }

      if (cont === 0){
        precio_lbl.classList.remove("reload")
        precio.classList.remove("reload")
        info_extra_lbl.classList.remove("reloadextra")
        info_extra.classList.remove("reloadextratxt")

        precio_lbl.classList.add("load")
        precio.classList.add("load")
        info_extra_lbl.classList.add("loadextra")
        info_extra.classList.add("loadextratxt")
        cont = 1;
      }else{
        precio_lbl.classList.remove("load")
        precio.classList.remove("load")
        info_extra_lbl.classList.remove("loadextra")
        info_extra.classList.remove("loadextratxt")

        precio_lbl.classList.add("reload")
        precio.classList.add("reload")
        info_extra_lbl.classList.add("reloadextra")
        info_extra.classList.add("reloadextratxt")
        
        cont = 0;
      }


    });
  
  
  
    /*
    inputFile.addEventListener("change", function() {
      let files = inputFile.files;
      if (files.length > 5) {
        alert("Por favor, seleccione no más de 5 archivos.");
        inputFile.value = ""; // Limpiar la selección de archivos
        return;
      }
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let fileName = file.name;
        let fileExt = fileName.split('.').pop().toLowerCase(); // Obtener la extensión del archivo
        if (fileExt !== 'jpg' && fileExt !== 'jpeg' && fileExt !== 'png') {
          alert("Por favor, seleccione solo imágenes (JPG, JPEG, PNG).");
          inputFile.value = ""; // Limpiar la selección de archivos
          return;
        }
        let fileSizeKB = file.size / 1024; // Convertir el tamaño del archivo a kilobytes
        if (fileSizeKB > 500) {
          alert("Por favor, seleccione imágenes de tamaño inferior a 500 KB."); 
          // Limpiar la selección de archivos
          return;
        }
        selectedImages.push(file);
         // Agregar el archivo a la matriz de imágenes seleccionadas

      }
       // Mostrar las imágenes seleccionadas en la consola
      // Aquí puedes enviar las imágenes al servidor o hacer lo que necesites con ellas.
    });
    */


  };



function validarFormulario() {

  let tCuenta = document.getElementById('tipoCuenta');
  let tcuenta2 = tiposCuenta[tCuenta.value - 1]
  let precio = document.getElementById('precio');
  let infoExtra = document.getElementById('info_extra');
  let arrayDatos = opcionesCuenta[tcuenta2]
  let arrayErrores = []
  


  if (arrayDatos.length < 1){
    alert("Seleccione algun tipo de cuenta a vender.");
    return false;
  }

  arrayDatos.forEach(function(e, ix) {

    let hname = e[0]
    let html_comp = document.getElementById(hname)
    let hvalue = html_comp.value;
    let hmin = parseInt(html_comp.min) 
    let hmax = parseInt(html_comp.max)
    let hid = html_comp.id; 
    let val = validarCampos(hvalue, hmin, hmax, hid)
    console.log(val)

    if (val === false){
      let hid = html_comp.id;
      let lblError = document.getElementById('error'+hid);
      lblError.classList.remove('hidden')
    }

    /*
    let hname = e[0]
    let html_comp = document.getElementById(hname)
    let hvalue = parseInt(html_comp.value); 
    let hmin = parseInt(html_comp.min) 
    let hmax = parseInt(html_comp.max) 

    console.log(hvalue)
    if (hvalue < hmin){
      arrayErrores.push('El valor de ' + hname + ' no puede ser menor a ' + hmin);
    }else if(hvalue > hmax){
      arrayErrores.push('El valor de ' + hname + ' no puede ser mayor a ' + hmax);
    }
    */
  });

  let hvalue = precio.value;
  let hmin = parseInt(precio.min) 
  let hmax = parseInt(precio.max)
  let hid = 'precio'; 
  let val = validarCampos(hvalue, hmin, hmax, hid)

  if (val === false){
    let lblError = document.getElementById('error'+hid);
    lblError.classList.remove('hidden')
  }

  if (infoExtra.value === ''){
    arrayErrores.push('Tiene que proporcionar informacion extra acerca de la cuenta');
  }

  if (selectedImages.length < 1){
    arrayErrores.push('Suba entre 1 a 5 imagenes para dar informacion sobre la cuenta')
  }

  if (arrayErrores.length > 0){
    alert(arrayErrores.join('. \n'))
    return false;
  }

  return true;


  }

function limpiarFormulario() {
  let tCuenta = document.getElementById('tipoCuenta');
  let tcuenta2 = tiposCuenta[tCuenta.value - 1]
  let precio = document.getElementById('precio');
  let infoExtra = document.getElementById('info_extra');
  let arrayDatos = opcionesCuenta[tcuenta2]

  let txtExtra = document.getElementById("textArea")
  let btn_img = document.getElementById("btn_img");
  let precio_dv = document.getElementById("precio_dv")
  let opCuenta = document.getElementById('opcionesCuenta')

  arrayDatos.forEach(function(e, ix) {

    let html_comp = document.getElementById(e[0])
    html_comp.value = html_comp.min



  });

  precio.value = '';
  infoExtra.value = ''
  selectedImages = []
  tCuenta.value = 1
  txtExtra.classList.add("hidden")
  btn_img.classList.add("hidden")
  precio_dv.classList.add("hidden")
  opCuenta.innerHTML = ''

}

function validarCampos(hvalue, hmin, hmax, hid) {

  let hvalueStr = hvalue.toString()

  console.log(hid)
  console.log(hmin)
  console.log(hmax)

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
  console.log(hvalueInt)

  if (hvalueInt < hmin){
    lblError.textContent = 'No puede ser menor a ' + hmin;
    return false
  }
  
  if (hvalueInt > hmax){
    lblError.textContent = 'No puede ser mayor a ' + hmax;
    return false
  }

  lblError.classList.add('hidden')
  return true;

}