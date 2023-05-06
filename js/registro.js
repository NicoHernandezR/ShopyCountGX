let nombre = document.getElementById("name")
let email = document.getElementById("email")
let pass = document.getElementById("password")
let passs = document.getElementById("password2")
let form = document.getElementById("form")
let parrafo = document.getElementById("warnings")
let errorNomb = document.getElementById("error")
let errorEm = document.getElementById("mensaje")
let errorPass = document.getElementById("incorrecto")



form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let error = ""
    let mensaje = ""
    let incorrecto = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    errorNomb.innerHTML = ""
    errorEm.innerHTML = ""

    if(nombre.value.length <6){
        error += `El nombre no es valido <br>`
        errorNomb.textContent = `El nombre no es valido`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        mensaje += `El email no es valido <br>`
        errorEm.textContent = `El email no es valido`
        entrar = true
    }
    if (pass.value !== passs.value){
        incorrecto += `Las contraseñas no coinciden <br>`
        errorPass.textContent = `Las contraseñas no coinciden `
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida<br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
  
  //error.style.color = "red";

  //form.addEventListener("submit", function(event) {
    //event.preventDefault(); // evita el envío del formulario por defecto

   // var MensajeError = [];

    //if (nombre.value === null || nombre.value ===""){
      //MensajeError.push("Ingrese su nombre");
     // return;
    //}

   // if (contrasena1.value !== contrasena2.value) n
    //  alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
    //return;
    //}

   //error.innerHTML= MensajeError.join(",");
    // Si llegamos aquí, todo está validado correctamente y podemos enviar el formulario.
   // form.submit();
  //});


