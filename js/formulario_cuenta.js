
let selectedImages = []; 

const tiposCuenta = ["Seleccionar","Steam", "CSGO", "Epic", "PlayStation","Xbox Live"];
const opcionesCuenta = {
  "Seleccionar": [],
  "Steam": ["Juegos", "Nivel Cuenta"],
  "CSGO": ["MM", "GC", "Faceit"],
  "Epic": ["Juegos"],
  "PlayStation": ["Juegos", "Suscripciones", "Tarjetas de regalo"],
  "Xbox Live": ["Juegos", "Suscripciones"]
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
    let txtExtra = document.getElementById("textArea");
    let btn_img = document.getElementById("btn_img");
    let precio = document.getElementById("precio")
    let precio_dv = document.getElementById("precio_dv")
    
    
    tiposCuenta.forEach(function(tipo, index) {
      const option = document.createElement("option");
      option.value = index + 1;
      option.text = tipo;
      primerSelect.appendChild(option);
    });

    primerSelect.addEventListener("change", function() {
      // Obtener la opción seleccionada en el primer select
      const tipoCuentaSeleccionada = primerSelect.value;
      opcionesCuentas.innerHTML = ""
      // Obtener las opciones correspondientes del objeto opcionesCuenta
      const opcionesCuentaSeleccionada = opcionesCuenta[tiposCuenta[tipoCuentaSeleccionada - 1]];
      console.log(opcionesCuentaSeleccionada)
    
      // Crear el segundo select
    
      // Agregar las opciones al segundo select
      opcionesCuentaSeleccionada.forEach(function(option, index) {
        let lbl = document.createElement("label");
        let inp = document.createElement("input");
        let div = document.createElement("div");
        
        lbl.textContent = option;
        inp.type = "number"
    
        lbl.classList.add("col-12")
        inp.classList.add("col-12")
        lbl.classList.add("col-md-6")
        inp.classList.add("col-md-6")

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
          inputFile.value = ""; // Limpiar la selección de archivos
          return;
        }
        selectedImages.push(file); // Agregar el archivo a la matriz de imágenes seleccionadas
      }
      console.log(selectedImages); // Mostrar las imágenes seleccionadas en la consola
      // Aquí puedes enviar las imágenes al servidor o hacer lo que necesites con ellas.
    });


  };


