function validateForm() {
    var username = document.forms["form"]["username"].value;
    var password = document.forms["form"]["password"].value;
    if (password == "") {
      alert("Por favor complete todos los campos");
      return false;
    }
    if(pass.value.length !== ""){
        warnings += "La contraseña no es valida"
        entrar = true
    if (username == "") {
      alert("Por favor complete todos los campos");
      return false;
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
}
  }

  

 /* const form = document.querySelector('#form');
  const usernameInput = document.querySelector('input[name="username"]');
  const passwordInput = document.querySelector('input[name="password"]');
  const usernameError = document.querySelector('#username-error');
  const passwordError = document.querySelector('#password-error');

  form.addEventListener('submit', function(event) {
      // Prevenir el envío del formulario
      event.preventDefault();

      // Validar los campos
      let isValid = true;

      if (usernameInput.value.trim() === '') {
          usernameError.textContent = 'El campo Nombre de Usuario es requerido';
          isValid = false;
      } else {
          usernameError.textContent = '';
      }

      if (passwordInput.value.trim() === '') {
          passwordError.textContent = 'El campo Contraseña es requerido';
          isValid = false;
      } else {
          passwordError.textContent = '';
      }

      // Enviar el formulario si es válido
      if (isValid) {
          form.submit();
      }
  });*/

  /*const form = document.getElementById('form');
  const alert = document.getElementById('alert');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const username = event.target[0].value;
    const password = event.target[1].value;

    
    if (!username || !password) {
      alert.innerHTML = '<p class="error">Por favor, ingrese su nombre de usuario y contraseña.</p>';
      return;
    }

    if (username.length < 6 || password.length < 8) {
      alert.innerHTML = '<p class="error">El nombre de usuario debe tener al menos 6 caracteres y la contraseña debe tener al menos 8 caracteres.</p>';
      return;
    }

    form.submit();
  });*/