  var form = document.getElementById("myForm");
  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var username = document.getElementById("username");
  var correo = document.getElementById("correo");
  var contraseña1 = document.getElementById("contraseña1");
  var contraseña2 = document.getElementById("contraseña2");
  error.style.color = "red";

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // evita el envío del formulario por defecto

    var MensajeError = [];

    if (nombre.value === null || nombre.value ===""){
      MensajeError.push("Ingrese su nombre");
      return;
    }

    if (contraseña1.value !== contraseña2.value) {
      alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
    return;
    }

   error.innerHTML= MensajeError.join(",");
    // Si llegamos aquí, todo está validado correctamente y podemos enviar el formulario.
    form.submit();
  });

