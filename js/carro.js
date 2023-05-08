let tpCuenta = ["Seleccionar","Steam", "CSGO", "Epic", "PlayStation","Xbox Live", "Switch", "Microsoft", "Riot","Battle Net"];

function calcularTotal() {
    let cantCuentas = Object.keys(cuentas_filas).length
    let cantIg = arrayIgnorar.length
    let sum = 0
    let arrayTipoCuentas = []
    for (let i = 0; i < cantCuentas; i++) {
        if (arrayIgnorar.includes(i.toString())){
            continue
        }
        sum = sum +cuentas_filas[i].precio;
        let tip = cuentas_filas[i].tipo
        if (!arrayTipoCuentas.includes(tip)){
            arrayTipoCuentas.push(tip)
        }
    }

    for (let i = 0; i < arrayTipoCuentas.length; i++) {
        arrayTipoCuentas[i] = tpCuenta[i + 1]
        
    }

    let txtPrec = document.getElementById('txtPrec')
    txtPrec.textContent = 'Precio Total: $' + sum
    let txtCant = document.getElementById('txtCant')
    txtCant.textContent = 'Cantidad Cuentas: ' + (parseInt(cantCuentas) - parseInt(cantIg))
    let txtTp = document.getElementById('txtTp')
    txtTp.textContent = 'Tipos De Cuentas: ' + arrayTipoCuentas.join(', ')

}


    

