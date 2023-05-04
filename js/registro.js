const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const passs = document.getElementById("password2")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if (pass.value !== passs.value){
        warnings += `Las contraseñas no coinciden <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida no puede ser menor de 8 caracteres<br>`
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


