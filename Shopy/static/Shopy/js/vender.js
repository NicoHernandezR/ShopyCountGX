var selectTipo = document.querySelectorAll('select[name="tipoCuenta"]')[0];
var opCuent = document.querySelectorAll('div[name="opcionesCuenta"]')[0];
var divs = opCuent.querySelectorAll('div');
var divsCopy = document.createElement('div');

var divList = []; // Variable para almacenar los elementos <div> ya eliminados

function crearDivCaracCopia() {
    //divsCopy.name = selectTipo.value;
    console.log(divs.length)
    for (var i = divs.length - 1; i >= 0; i--) {
        let div = divs[i];
        console.log(divs[i])
        divList.push(div)
    }

    divList.forEach(element => {
        divsCopy.appendChild(element)
    });
    console.log(divsCopy)
    console.log(divs)
}

function quitarHiddenCarac(val) {
    for (var i = divs.length - 1; i >= 0; i--) {
        var div = divs[i];
        div.classList.remove('hidden')

    }
}

function agregarHiddenCarac(val) {
    for (var i = divs.length - 1; i >= 0; i--) {
        var div = divs[i];
        var divName = div.getAttribute('name');
      
        if (divName !== val) {
                div.classList.add('hidden')
        }
    }
}

selectTipo.addEventListener('change', function(event) {
    let val = selectTipo.value;

    
    // Restaurar los elementos <div> desde la copia original si no se han eliminado previamente

    quitarHiddenCarac(val)
    agregarHiddenCarac(val)

});