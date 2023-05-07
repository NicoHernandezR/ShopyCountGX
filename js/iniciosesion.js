function validateForm() {
    var username = document.forms["form"]["username"].value;
    var password = document.forms["form"]["password"].value;
    if (password == "") {
      alert("Por favor complete todos los campos");
      return false;
    }
    if (username == "") {
      alert("Por favor complete todos los campos");
      return false;
    }
  }