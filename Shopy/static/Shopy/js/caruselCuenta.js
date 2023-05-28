let inputImagen = document.getElementById("input-file");
let carrusel = document.getElementById('carousel');
let carruselInner = carrusel.querySelector('.carousel-inner');

let selectedImages = []; 

function limpiarCarusel() {
  let carImg = document.getElementById('cinner');
  let imgs = document.querySelectorAll('.carousel-item')
  //console.log(imgs)
  for (let i = 0; i < imgs.length; i++) {
    carImg.removeChild(imgs[i]);
    
  }
}

inputImagen.addEventListener('change', function() {
  let files = inputImagen.files;
  let arrayEliminar = [];
  let fileLenght = files.length
  let lblError = document.getElementById('errorImg');
  selectedImages = []
  limpiarCarusel()
  if (fileLenght > 0 && fileLenght <= 5) {

    for (let i = 0; i < fileLenght; i++) {

        let file = files[i];
        let fileName = file.name;
        let fileExt = fileName.split('.').pop().toLowerCase(); // Obtener la extensión del archivo
        
        if (fileExt !== 'jpg' && fileExt !== 'jpeg' && fileExt !== 'png') {
          lblError.textContent ="Por favor, seleccione solo imágenes (JPG, JPEG, PNG)."
          lblError.classList.remove('hidden')
          arrayEliminar.push(i)

          //inputFile.value = ""; // Limpiar la selección de archivos
          //limpiarCarusel()
          continue
        }
        let fileSizeKB = file.size / 1024; // Convertir el tamaño del archivo a kilobytes
        if (fileSizeKB > 500) {
          lblError.textContent ="Por favor, seleccione imágenes de tamaño inferior a 501 KB."
          lblError.classList.remove('hidden')
          // Limpiar la selección de archivos

          arrayEliminar.push(i)
          limpiarCarusel()
          continue
        };

        lblError.classList.add('hidden')
        let reader = new FileReader();
        reader.onload = function() {
            let img = document.createElement('img');
            img.classList.add('d-block', 'img_size');
            img.src = reader.result;
            //img.style.width = calcularAnchoImagen();
            //img.style.height = calcularLargoImagen();


            let item = document.createElement('div');
            item.classList.add('carousel-item');
            if (i === 0) {
            item.classList.add('active');
            }
            item.appendChild(img);

            carruselInner.appendChild(item);
        }
    

      reader.readAsDataURL(file);
      selectedImages.push(file);

    }
    borrarArchivosMalos(arrayEliminar)


    if (arrayEliminar.length === fileLenght){
      cargarPlaceHolder()
    }



  }else{
    cargarPlaceHolder(5)
    lblError.textContent ='Suba entre 1 a 5 imagenes para dar informacion sobre la cuenta.'
    lblError.classList.remove('hidden')
    borrarArchivosMalos(null)

    /*
    for (let x = files.length; x > 0; x--) {
      console.log('borrando x' + x)
      files.remove(x)
    }
    console.log(this.files)
    */
     // Limpiar la selección de archivos
    return;
  }
});

function borrarArchivosMalos(lista) {

  let fil = inputImagen.files;
  let fileListArray = Array.from(fil)
  if (lista === null){
    for (let x = fileListArray.length; x >= 0; x--) {
      fileListArray.splice(x,1)
    }

  }else{
    lista.sort((a,b) => b - a)

    lista.forEach((file) => {

      fileListArray.splice(file,1)
    });
  }

  let newFileList = new DataTransfer();
  fileListArray.forEach((file) => { // Agregamos los archivos restantes al nuevo DataTransfer

    newFileList.items.add(file);
  });
  inputImagen.files = newFileList.files;




}
