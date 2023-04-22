

const tiposCuenta = ["Seleccionar","Steam", "CSGO", "Epic", "PlayStation","Xbox Live"];
const opcionesCuenta = {
  "Seleccionar": [],
  "Steam": [["Juegos",0,3000], ["Nivel Cuenta",0,1000]],
  "CSGO": [["MM", 0, 18], ["GC",0,21], ["Faceit",0,10]],
  "Epic": [["Juegos",0,3000]],
  "PlayStation": [["Juegos",0,3000], ["Suscripciones",0,12]],
  "Xbox Live": [["Juegos",0,3000], ["Suscripciones",0,12]]
};

let opcionesCuentas = document.getElementById("opcionesCuenta");

window.onload  = function() {


    let tipoCuenta = document.getElementById("tipoCuenta");
    tipoCuenta.innerHTML = ''
        

    tiposCuenta.forEach(function(tipo, index) {
        let option = document.createElement("option");
        option.value = index ;
        option.text = tipo;
        tipoCuenta.appendChild(option);

      });
 
};

tipoCuenta.addEventListener("change", function() {
    // Obtener la opción seleccionada en el primer select
    let tipoCuentaSeleccionada = tipoCuenta.value;
    opcionesCuentas.innerHTML = ""
    // Obtener las opciones correspondientes del objeto opcionesCuenta
    let opcionesCuentaSeleccionada = opcionesCuenta[tiposCuenta[tipoCuentaSeleccionada]];

  
    // Crear el segundo select
  
    // Agregar las opciones al segundo select
    opcionesCuentaSeleccionada.forEach(function(option, index) {
      let lbl = document.createElement("label");
      let inp = document.createElement("input");
      let div = document.createElement("div");
      
      lbl.textContent = option[0];
      inp.type = "number"
      inp.id = option[0];
      inp.min = option[1];
      inp.max = option[2];
      inp.value = inp.min;
  
      lbl.classList.add("col-12")
      inp.classList.add("col-12")
      inp.classList.add("inp_color")


      div.appendChild(lbl);
      div.appendChild(inp);

      div.classList.add("container-fluid")
      div.classList.add("pad-bot-opt")

      opcionesCuentas.appendChild(div);
    });
  



    // Mostrar el segundo select en el contenedor correspondiente

  });