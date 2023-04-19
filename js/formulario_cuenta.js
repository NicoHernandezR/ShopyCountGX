
let selectedImages = []; 

window.onload = function() {
    const inputFile = document.getElementById("input-file");
    inputFile.addEventListener("change", function() {
      const files = inputFile.files;
      if (files.length > 5) {
        alert("Por favor, seleccione no más de 5 archivos.");
        inputFile.value = ""; // Limpiar la selección de archivos
        return;
      }
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name;
        const fileExt = fileName.split('.').pop().toLowerCase(); // Obtener la extensión del archivo
        if (fileExt !== 'jpg' && fileExt !== 'jpeg' && fileExt !== 'png' && fileExt !== 'gif') {
          alert("Por favor, seleccione solo imágenes (JPG, JPEG, PNG o GIF).");
          inputFile.value = ""; // Limpiar la selección de archivos
          return;
        }
        const fileSizeKB = file.size / 1024; // Convertir el tamaño del archivo a kilobytes
        if (fileSizeKB > 500) {
          alert("Por favor, seleccione imágenes de tamaño inferior a 500 KB.");
          inputFile.value = ""; // Limpiar la selección de archivos
          return;
        }
        selectedImages.push(file); // Agregar el archivo a la matriz de imágenes seleccionadas
      }
      console.log(selectedImages); // Mostrar las imágenes seleccionadas en la consola
      // Aquí puedes enviar las imágenes al servidor o hacer lo que necesites con ellas.
    });
  };