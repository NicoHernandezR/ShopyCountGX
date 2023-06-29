const divMain = document.getElementById('div-main');

// Obtén todos los elementos ul dentro del div
const ulElements = divMain.querySelectorAll('ul');

// Itera sobre los elementos ul encontrados
ulElements.forEach((ul) => {
    ul.remove();
  });

function goBack() {
    window.history.back();
  }