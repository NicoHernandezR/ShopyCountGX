const inputImagen = document.getElementById("input-file");
const carrusel = document.getElementById('carousel');
const carruselInner = carrusel.querySelector('.carousel-inner');

let selectedImages = []; 

inputImagen.addEventListener('change', function() {
  let files = this.files;
  if (files.length > 0 && files.length <= 5) {
    carruselInner.innerHTML = '';
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let fileName = file.name;
        let fileExt = fileName.split('.').pop().toLowerCase(); // Obtener la extensión del archivo
        if (fileExt !== 'jpg' && fileExt !== 'jpeg' && fileExt !== 'png') {
          alert("Por favor, seleccione solo imágenes (JPG, JPEG, PNG).");
          inputFile.value = ""; // Limpiar la selección de archivos
          return;
        }
        let fileSizeKB = file.size / 1024; // Convertir el tamaño del archivo a kilobytes
        if (fileSizeKB > 500) {
          alert("Por favor, seleccione imágenes de tamaño inferior a 500 KB."); 
          // Limpiar la selección de archivos
          return;
        }
        let reader = new FileReader();
        reader.onload = function() {
            let img = document.createElement('img');
            img.classList.add('d-block', 'img_size');
            img.src = reader.result;


            let item = document.createElement('div');
            item.classList.add('carousel-item');
            if (i === 0) {
            item.classList.add('active');
            }
            item.appendChild(img);

            carruselInner.appendChild(item);
        }
    
    console.log("imagenLoad")
      reader.readAsDataURL(file);
      selectedImages.push(file);

    }
  }else{
    inputFile.value = ""; // Limpiar la selección de archivos
    return;
  }
});