
let selectedImages = []; 


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
    let btn_img = document.getElementById("btn_img");
    let precio = document.getElementById("precio")
    let precio_dv = document.getElementById("precio_dv")

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
        let inp = document.createElement("input");
        let div = document.createElement("div");
        
        lbl.textContent = option[0];
        inp.type = "number"
        inp.id = option[0];
        inp.name = option[0];
        inp.min = option[1];
        inp.max = option[2];
        inp.value = inp.min;
    
    
        lbl.classList.add("col-12")
        inp.classList.add("col-12")
        lbl.classList.add("col-md-6")
        inp.classList.add("col-md-6")
        inp.classList.add("inp_form")


        div.appendChild(lbl);
        div.appendChild(inp);

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
      } else {
        txtExtra.value = ""
        precio.value = ""
        txtExtra.classList.add("hidden")
        btn_img.classList.add("hidden")
        precio_dv.classList.add("hidden")

      //  segundoSelectContainer.style.display = 'none';
      }
    });
  
  
  
  
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


  };



function validarFormulario() {

  let tCuenta = document.getElementById('tipoCuenta');
  let tcuenta2 = tiposCuenta[tCuenta.value - 1]
  let precio = document.getElementById('precio');
  let infoExtra = document.getElementById('info_extra');
  let arrayDatos = opcionesCuenta[tcuenta2]
  let arrayErrores = []
  
  console.log(tCuenta.value)
  console.log(tiposCuenta[tCuenta.value - 1])
  console.log(arrayDatos)


  if (arrayDatos.length < 1){
    alert("Seleccione algun tipo de cuenta a vender.");
    return false;
  }

  arrayDatos.forEach(function(e, ix) {

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
  });

  if (parseInt(precio.value) <= parseInt(precio.min)){
    arrayErrores.push('El valor del precio no puede ser menor a ' + precio.min);
  }else if(parseInt(precio.value)  > parseInt(precio.max)){
    arrayErrores.push('El valor del precio no puede ser mayor a ' + precio.max);
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

  precio.value = precio.min;
  infoExtra.value = ''
  selectedImages = []
  tCuenta.value = 1
  txtExtra.classList.add("hidden")
  btn_img.classList.add("hidden")
  precio_dv.classList.add("hidden")
  opCuenta.innerHTML = ''

}