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
}

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

window.onload(mostrarCuentas(null))

function limparCuentas() {
    let div_prin = document.getElementById("cuenta");

    div_prin.innerHTML = ""
}

function mostrarCuentas(filtros) {
    cantMostradas = 0

    limparCuentas()
    


    
    let cant_cuentas = Object.keys(cuentas_filas).length

    for (let i = 1; i <= 5; i++) {
        let fila = cuentas_filas[i];
      }

    
    for (let i = 0; i < cant_cuentas; i++) {

        if (filtros === null){
            cuentasNoFiltro(i)
            continue
        }

        if (filtros.value === '0'){
            cuentasNoFiltro(i)
            continue
        }  


        cuentasConFiltroValores(i, filtros.value);
        




    }

    if (cantMostradas < 2){
        cambiarMgrPag('0')
    }else{
        cambiarMgrPag('1')
    }
    

}

function cuentasNoFiltro(i) {
    let div_prin = document.getElementById("cuenta");
    let cuenta_tipo_id = cuentas_filas[i][0].toString();
    let div_main = crearDivMain(i);
    let div_card = crearBtnFront();

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

function cuentasConFiltroTipoCuenta(i, td_id) {

    let cuenta_tipo_id = cuentas_filas[i][0].toString();
    if (cuenta_tipo_id.toString() !== td_id.toString()){
        return null;
    }

    let div_prin = document.getElementById("cuenta");
    
    let div_main = crearDivMain(i);
    let div_card = crearBtnFront();

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

function cuentasConFiltroValores(i, t_id) {


    let arrayInfo = tiposDeCuenta[t_id];
    let carac_imp = cuentas_filas[i][1]

    let maxContArray = arrayInfo.length;
    let contArray = 0;
    
    arrayInfo.forEach(function(e, ix) {
        let html_carac = document.getElementById(e[0])
        if (html_carac.value === html_carac.min){
            console.log(contArray)
            contArray = contArray + parseInt(1);
        }

        if (maxContArray === contArray){
            cuentasConFiltroTipoCuenta(i, t_id);
        }
        if (e[0] === carac_imp[0]){
            if (html_carac.value === carac_imp[1].toString()){

                let div_prin = document.getElementById("cuenta");
                let cuenta_tipo_id = cuentas_filas[i][0].toString();
                let div_main = crearDivMain(i);
                let div_card = crearBtnFront();
            
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
            }
            
        }
    });
    


}


function crearBtnFront() {

    let divs = [];

    let button_del = document.createElement('button')
    button_del.classList.add(clases_btn[2])
    button_del.textContent = 'Agregar al Carro'

    let button_ver = document.createElement('button')
    button_ver.classList.add(clases_btn[2])
    button_ver.textContent = 'Ver Cuenta'

    let form = document.createElement('form');
    form.action = "pago.html"
    form.appendChild(button_ver)

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