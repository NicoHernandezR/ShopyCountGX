let cantMostradas = 0
// Formato:
// Id cuenta : [TipoCuenta, [Carac Principal, Cant], Precio] 
let cuentas_filas = {
    0 : [1, ["Juegos", 23], 32000],
    1 : [2, ["Faceit", 10], 50000],
    2 : [3, ["Juegos", 50], 25000],
    3 : [4, ["Suscripciones", 7], 10000],
    4 : [5, ["Suscripciones", 9], 10000],
    5 : [1, ["Nivel Cuenta", 200], 25000],
    6 : [1, ["Juegos", 23], 32000],
    7 : [2, ["Faceit", 10], 50000],
    8 : [3, ["Juegos", 50], 25000],
    9 : [4, ["Suscripciones", 7], 10000],
    10 : [5, ["Suscripciones", 9], 10000],
    11 : [1, ["Nivel Cuenta", 200], 25000],
    12 : [1, ["Juegos", 23], 32000],
    13 : [2, ["Faceit", 10], 50000],
    14 : [3, ["Juegos", 50], 25000],
    15 : [4, ["Suscripciones", 7], 10000],
    16 : [5, ["Suscripciones", 9], 10000],
    17 : [1, ["Nivel Cuenta", 200], 25000],
    18 : [1, ["Juegos", 23], 32000],
    19 : [2, ["Faceit", 10], 50000],
    20 : [3, ["Juegos", 50], 25000],
    21 : [4, ["Suscripciones", 7], 10000],
    22 : [5, ["Suscripciones", 9], 10000],
    23 : [1, ["Nivel Cuenta", 200], 25000],
    24 : [1, ["Juegos", 23], 32000],
    25 : [1, ["Juegos", 23], 32000],
    26 : [1, ["Juegos", 23], 32000],
    27 : [1, ["Juegos", 23], 32000],
    28 : [1, ["Juegos", 23], 32000],
    29 : [1, ["Juegos", 23], 32000],
    30 : [1, ["Juegos", 23], 32000],
    31 : [1, ["Juegos", 23], 32000],
    32 : [1, ["Juegos", 23], 32000],
}

let arrayIgnorar = []

const tiposDeCuenta = {
    "Seleccionar": [],
    "1": [["Juegos",0,3000], ["Nivel Cuenta",0,1000]],
    "2": [["MM", 0, 18], ["GC",0,21], ["Faceit",0,10]],
    "3": [["Juegos",0,3000]],
    "4": [["Juegos",0,3000], ["Suscripciones",0,12]],
    "5": [["Juegos",0,3000], ["Suscripciones",0,12]]
  };


let clases_row = ["row", "col-12", "col-md-9",  "pd_tp",  "col-4",  "col-md-4", "col-md-2", "col-6"]

let clases_btn = [ "btn_centrar_row", "btn_centrar_c", "btn_size_c"]

let clases_cont = [ "justify-content-center", "card-content", "container-fluid"]

let clases_otro = ["card", "bg_wh",  "img_crd", "txt_info", "img_info",]

let cantMostrar = 5;
let mostrarGrupos = 5
let gruposTotales = 0
let cantGrupos = 1
let contActual = 0
let indexGroup = 0;
let arrayGruposRango = [1,6]
let arrayCuentasRango = [1,26]

function changeColorBtnPagTr() {
    let allBtn = document.querySelectorAll('.btn_pag')
    allBtn.forEach(function (i,e) {
        i.style.backgroundColor = 'transparent'

    })
}

function showGroup(index) {
    let groups = document.querySelectorAll('.group');
    for (let i = 0; i < groups.length; i++) {
      if (i === index) {
        groups[i].style.display = 'block';
        groups[i].classList.add('flip-horizontal-bottom')
      } else {
        groups[i].style.display = 'none';
        groups[i].classList.remove('flip-horizontal-bottom')
      }
    }
  }


window.onload(mostrarCuentas(null))

function limparCuentas() {
    let div_prin = document.getElementById("cuenta");

    div_prin.innerHTML = ""
}

function mostrarGrupoN2() {
    
}

function crearBtnPaginacion(){
    let div_prin = document.getElementById('btnPag')
    div_prin.innerHTML = ''

    if (cantGrupos === 1){
        return null;
    }

    let btnAtras = document.createElement('button')
    btnAtras.classList.add('btn_flechas')
    btnAtras.classList.add('prev-icon')
    btnAtras.id = 'prev'
    div_prin.appendChild(btnAtras)


    for (let i = 1; i < cantGrupos + 1; i++) {
        let btn = document.createElement('button')
        btn.textContent = i
        btn.id = 'btn' + i
        btn.onclick = function () {
            mostrarGrupoN(btn)  
        } 

        if (i === 1){
            btn.style.backgroundColor = 'blue'
        }

        btn.classList.add('btn_pag')        
        div_prin.appendChild(btn)
    } 

    function mostrarGrupoN(btn) {
        changeColorBtnPagTr() 
        //allBtn.style.backgroundColor = 'none'
        indexGroup = parseInt(btn.textContent) - 1
        btn.style.backgroundColor = 'blue'
        showGroup(indexGroup)
    }

    let btnNext = document.createElement('button')
    btnNext.classList.add('btn_flechas')
    btnNext.id = 'next'
    btnNext.classList.add('next-icon')
    div_prin.appendChild(btnNext)
}

function calcularRangoCuentasMostrar() {
    arrayCuentasRango = []
    arrayGruposRango.forEach(function (i,e) {
        if (e === 1){
            arrayCuentasRango.push(e)
        }else{
            arrayCuentasRango.push(e * cantMostrar)
        }

    })
}

function mostrarCuentas(filtros) {

    limparCuentas()
    cantMostradas = 0
    indexGroup = 0
    totalCuentas = cuentas_filas.length
    cantGrupos = 1
    contActual = 0
    
    let cant_cuentas = Object.keys(cuentas_filas).length
    console.log(cant_cuentas)



    
    for (let i = 0; i < cant_cuentas; i++) {

        //if (i >= arrayCuentasRango[0] && i <= arrayCuentasRango[1] ){}
        
        if (contActual === cantMostrar){
            cantGrupos = cantGrupos + 1
            contActual = 0
        }
        

        if (arrayIgnorar.includes(i.toString())){
            continue
        }

        if (filtros === null){

            cuentasNoFiltro(i, cantGrupos)
            contActual = contActual + 1
            continue
        }

        if (filtros.value === '0'){

            cuentasNoFiltro(i, cantGrupos)
            contActual = contActual + 1
            continue
        }  


        cuentasConFiltroValores(i, filtros.value, cantGrupos);
        
        




    }

    if (cantMostradas < 5){
        cambiarMgrPag('0')
    }else{
        cambiarMgrPag('1')
    }
    crearBtnPaginacion()
    if (cantGrupos > 1){
        
        showGroup(0)
    }
    if (document.URL.includes("carro.html")){
        calcularTotal()
    }


}

function crearDivGrupos(numGrup) {
    
    let div_pri = document.getElementById("cuenta");
    let divExistenteGroup = document.getElementById('group' + numGrup)

    if (divExistenteGroup === null){
        let divGroup = document.createElement('div')
        divGroup.id = 'group' + numGrup;
        divGroup.classList.add('group')
        div_pri.appendChild(divGroup)
        return divGroup;
    }
    return divExistenteGroup

}

function cuentasNoFiltro(i, num) {
    let div_prin = crearDivGrupos(num);
    let cuenta_tipo_id = cuentas_filas[i][0].toString();
    let div_main = crearDivMain(i);
    let div_card = crearBtnFront(cuenta_tipo_id, i);

    div_prin.appendChild(div_main)

    
    let divs = [];

    let carac_imp = cuentas_filas[i][1]
    let precio = cuentas_filas[i][2]

    let src_img = '../img/cuenta_icon/icon' + cuenta_tipo_id + '.png'
    let img = document.createElement('img')
    img.src = src_img
    img.classList.add(clases_otro[4])        


    for (let i = 0; i < 5; i++) {   
        divs.push(document.createElement('div'))
    }

    divs[0].classList.add(clases_otro[2])
    divs[1].classList.add(clases_row[0])
    divs[2].classList.add(clases_row[4])
    divs[3].classList.add(clases_row[4], clases_otro[3])
    divs[4].classList.add(clases_row[4], clases_otro[3])

    
    divs[2].appendChild(img)
    divs[3].textContent = carac_imp.join(' ') 
    divs[4].textContent = "$ " + precio.toString();

    divs[1].appendChild(divs[2])
    divs[1].appendChild(divs[3])
    divs[1].appendChild(divs[4])

    divs[0].appendChild(divs[1])

    let card = document.getElementById('card_main' + i.toString());


    card.appendChild(divs[0])
    card.appendChild(div_card)
    cantMostradas = cantMostradas + 1
    
}

function cuentasConFiltroTipoCuenta(i, td_id, num) {

    let cuenta_tipo_id = cuentas_filas[i][0].toString();
    if (cuenta_tipo_id.toString() !== td_id.toString()){
        return null;
    }

    let div_prin = crearDivGrupos(num);
    
    let div_main = crearDivMain(i);
    let div_card = crearBtnFront(cuenta_tipo_id, i);

    div_prin.appendChild(div_main)

    
    let divs = [];

    let carac_imp = cuentas_filas[i][1]
    let precio = cuentas_filas[i][2]

    let src_img = '../img/cuenta_icon/icon' + cuenta_tipo_id + '.png'
    let img = document.createElement('img')
    img.src = src_img
    img.classList.add(clases_otro[4])        


    for (let i = 0; i < 5; i++) {   
        divs.push(document.createElement('div'))
    }

    divs[0].classList.add(clases_otro[2])
    divs[1].classList.add(clases_row[0])
    divs[2].classList.add(clases_row[4])
    divs[3].classList.add(clases_row[4], clases_otro[3])
    divs[4].classList.add(clases_row[4], clases_otro[3])

    
    divs[2].appendChild(img)
    divs[3].textContent = carac_imp.join(' ') 
    divs[4].textContent = "$ " + precio.toString();

    divs[1].appendChild(divs[2])
    divs[1].appendChild(divs[3])
    divs[1].appendChild(divs[4])

    divs[0].appendChild(divs[1])

    let card = document.getElementById('card_main' + i.toString());


    card.appendChild(divs[0])
    card.appendChild(div_card)
    cantMostradas = cantMostradas + 1
    contActual = contActual + 1
    
}

function cuentasConFiltroValores(i, t_id, num) {


    let arrayInfo = tiposDeCuenta[t_id];
    let carac_imp = cuentas_filas[i][1]

    let maxContArray = arrayInfo.length;
    let contArray = 0;
    
    arrayInfo.forEach(function(e, ix) {
        let html_carac = document.getElementById(e[0])
        if (html_carac.value === html_carac.min || html_carac.value === ''){
            contArray = contArray + parseInt(1);
        }

        if (maxContArray === contArray){
            cuentasConFiltroTipoCuenta(i, t_id, cantGrupos);
        }
        if (e[0] === carac_imp[0]){
            if (html_carac.value === carac_imp[1].toString()){

                let div_prin = crearDivGrupos(num);
                let cuenta_tipo_id = cuentas_filas[i][0].toString();
                let div_main = crearDivMain(i);
                let div_card = crearBtnFront(cuenta_tipo_id, i);
            
                div_prin.appendChild(div_main)
            
                
                let divs = [];
            
                
                let precio = cuentas_filas[i][2]
            
                let src_img = '../img/cuenta_icon/icon' + cuenta_tipo_id + '.png'
                let img = document.createElement('img')
                img.src = src_img
                img.classList.add(clases_otro[4])        
            
            
                for (let i = 0; i < 5; i++) {   
                    divs.push(document.createElement('div'))
                }
            
                divs[0].classList.add(clases_otro[2])
                divs[1].classList.add(clases_row[0])
                divs[2].classList.add(clases_row[4])
                divs[3].classList.add(clases_row[4], clases_otro[3])
                divs[4].classList.add(clases_row[4], clases_otro[3])
            
                
                divs[2].appendChild(img)
                divs[3].textContent = carac_imp.join(' ') 
                divs[4].textContent = "$ " + precio.toString();
            
                divs[1].appendChild(divs[2])
                divs[1].appendChild(divs[3])
                divs[1].appendChild(divs[4])
            
                divs[0].appendChild(divs[1])
            
                let card = document.getElementById('card_main' + i.toString());
            
            
                card.appendChild(divs[0])
                card.appendChild(div_card)
                cantMostradas = cantMostradas + 1
                contActual = contActual + 1
            }
            
        }
    });
    


}

function eliminarCuenta(x) {
    arrayIgnorar.push(x)
    console.log(x)
    mostrarCuentas(null)

}

function crearBtnFront(idCuenta, x) {

    let divs = [];

    let button_del = document.createElement('button')
    button_del.classList.add(clases_btn[2])
    if (document.URL.includes("carro.html")){
        button_del.textContent = 'Eliminar del Carro'
        button_del.value = x
        button_del.onclick = function() {
            eliminarCuenta(button_del.value )
        } ;
    }else{
        
        button_del.textContent = 'Agregar al Carro'
    }


    let button_ver = document.createElement('button')
    button_ver.classList.add(clases_btn[2])
    button_ver.textContent = 'Ver Cuenta'

    let inp = document.createElement('input')
    inp.style.display = 'none'
    inp.value = idCuenta;
    inp.name = 'tipo'

    let form = document.createElement('form');
    form.action = "pago.html"
    form.appendChild(button_ver)
    form.appendChild(inp)

    for (let i = 0; i < 7; i++) {   
        divs.push(document.createElement('div'))
    }

    divs[0].classList.add(clases_cont[1])
    divs[1].classList.add(clases_cont[2])
    divs[2].classList.add(clases_row[0], clases_btn[0])
    divs[3].classList.add(clases_row[6])
    divs[4].classList.add(clases_row[5], clases_row[7], clases_btn[1])
    divs[5].classList.add(clases_row[5], clases_row[7], clases_btn[1])
    divs[6].classList.add(clases_row[6])

    divs[4].appendChild(form);
    divs[5].appendChild(button_del);

    divs[2].appendChild(divs[3])
    divs[2].appendChild(divs[4])
    divs[2].appendChild(divs[5])
    divs[2].appendChild(divs[6])

    divs[1].appendChild(divs[2])
    divs[0].appendChild(divs[1])

    return divs[0]

}

function crearDivMain(index) {
    
    let divs = [];
    
    for (let i = 0; i < 3; i++) {   
        divs.push(document.createElement('div'))
    }

    divs[0].classList.add(clases_row[0], clases_cont[0], clases_row[3])
    divs[1].classList.add(clases_row[1], clases_row[2])
    divs[2].classList.add(clases_otro[0],clases_otro[1])
    divs[2].id = 'card_main' + index.toString()

    divs[1].appendChild(divs[2]);
    divs[0].appendChild(divs[1]);

    return divs[0]
}


function vaciarCarro(){
    let cant_cuentas = Object.keys(cuentas_filas).length
    for (let i = 0; i < cant_cuentas; i++) {
        if (!arrayIgnorar.includes(i.toString())){
            arrayIgnorar.push(i.toString())
            console.log(arrayIgnorar)
        }

    }
    mostrarCuentas(null)
}

document.querySelector('#prev').addEventListener('click', () => {

    indexGroup = (indexGroup > 0) ? indexGroup - 1 : 0;
    console.log((parseInt(indexGroup) + 1))
    let btn = document.getElementById('btn' + (parseInt(indexGroup) + 1))
    
    changeColorBtnPagTr()
    btn.style.backgroundColor = 'blue'
    showGroup(indexGroup);
  });
  
  document.querySelector('#next').addEventListener('click', () => {
    let groups = document.querySelectorAll('.group');
    indexGroup = (indexGroup < groups.length - 1) ? indexGroup + 1 : groups.length - 1;
    changeColorBtnPagTr()
    console.log((parseInt(indexGroup) + 1))
    let btn = document.getElementById('btn' + (parseInt(indexGroup) + 1))
    
    btn.style.backgroundColor = 'blue'
    showGroup(indexGroup);
  });
