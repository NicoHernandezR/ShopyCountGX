let nombre = document.getElementById("name")
let email = document.getElementById("email")
let pass = document.getElementById("password")
let passs = document.getElementById("password2")
let form = document.getElementById("form")
let parrafo = document.getElementById("warnings")
let errorNomb = document.getElementById("error")
let errorEm = document.getElementById("mensaje")
let errorPass = document.getElementById("incorrecto")
let enviado = document.getElementById("enviado")



form.addEventListener("submit", e=>{
    let warnings = ""
    let error = ""
    let mensaje = ""
    let incorrecto = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    errorNomb.innerHTML = ""
    errorEm.innerHTML = ""
    errorPass.innerHTML = ""
    enviado.textContent = ""
    if(nombre.value.length <6){
        error += `El nombre no es valido <br>`
        errorNomb.textContent = `El nombre debe tener mas de 6 caracteres`
        errorNomb.style.color = "red";
        entrar = true
    }
    if(email.value.trim().length < 8){
        errorEm.textContent = `El email debe tener mas de 8 caracteres`
    }
    else if (!regexEmail.test(email.value)){
        mensaje += `El email no es valido <br>`
        errorEm.textContent = `El email no es valido`
        errorEm.style.color = "red";
        entrar = true
    }
    if (pass.value !== passs.value){

        errorPass.textContent = `Las contraseñas no coinciden `
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña debe tener mas de 8 caracteres<br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
        e.preventDefault()
    }else{
        enviado.textContent = "Enviado"
    }
})