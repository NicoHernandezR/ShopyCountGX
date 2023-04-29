let inputImagen = document.getElementById("input-file");
let carrusel = document.getElementById('carousel');
let carruselInner = carrusel.querySelector('.carousel-inner');
let cantMulMax = 0.0
let cantMulMin = 0.0

let selectedImages = []; 

inputImagen.addEventListener('change', function() {
  let files = inputImagen.files;
  let arrayEliminar = [];
  let fileLenght = files.length
  let lblError = document.getElementById('errorImg');

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
          lblError.textContent ="Por favor, seleccione imágenes de tamaño inferior a 500 KB."
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

function calcularAnchoImagen() {
  // Obtenemos la resolución de la pantalla
  let screenWidth = window.innerWidth;

  // Calculamos el ancho de la imagen
  let imageWidth = screenWidth * 0.5;

  if (imageWidth > 380){
    imageWidth = 380;
  }

  if (imageWidth < 261){
    imageWidth = 261;
  }

  // Asignamos el ancho calculado a la imagen
  return `${imageWidth}px`;
}

function calcularLargoImagen() {
  // Obtenemos la resolución de la pantalla
  let screenHeight = window.innerHeight;
  let screenWidth = window.innerWidth;
  // Calculamos el ancho de la imagen
  let imageHeight = 0

  if (screenWidth < 600){
    imageHeight = screenHeight* 0.3
  }else{
    imageHeight = screenHeight* 0.5;
  }


  if (imageHeight > 304){
    imageHeight = 304;
  }

  if (imageHeight < 304){
    imageHeight = 304;
  }


  //Esta cuestion siempre da 304 nose pa que existe xd
  return `${imageHeight}px`;
}

function calcularPosFlechas() {

  let fl_iz = document.getElementById('fl_iz')
  let fl_dr = document.getElementById('fl_dr')

  let screenWidth = window.innerWidth;
  let cantAum = 20;
  let screenWidthMax = 1100
  let screenWidthMin = 768
  let contVuelta = 0
  fl_iz.style.left = '0px'
  fl_dr.style.right = '0px'
if (screenWidth <= 480) {
  fl_iz.style.left = '0px'
  fl_dr.style.right = '0px'
  return null
}

if (screenWidth >= 718 && screenWidth <= 770) {
  fl_iz.style.left = '30px'
  fl_dr.style.right = '30px'
  return null
  
} else if (parseInt(screenWidth) < parseInt(screenWidthMax) && parseInt(screenWidth) > parseInt(screenWidthMin)){
    console.log('screenMax')
    
    fl_iz.style.left = '-' + cantMulMax + 'px'
    fl_dr.style.right = '-' + cantMulMax + 'px'
    cantMulMax = ((screenWidthMax - screenWidth) / 100) * cantAum
    contVuelta = 0
}else if (screenWidth <= screenWidthMin) {
    if (contVuelta === 0){
      console.log('Poniendolo en 0')
      fl_iz.style.left = '0px';
      fl_dr.style.right = '0px'
      contVuelta = 1
    }
    console.log('screenMin')
    
    fl_iz.style.left = cantMulMin + 'px'
    fl_dr.style.right = cantMulMin + 'px'
    cantMulMin = ((screenWidthMin - screenWidth) / 100) * cantAum

  }else{
    console.log('else')
    fl_iz.style.left = '0px';
    fl_dr.style.right = '0px'
  }
  
}



window.addEventListener("resize", function (){
  let imgs = document.querySelectorAll('.img_size')

  //calcularPosFlechas()

  /*
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.width = calcularAnchoImagen();
    imgs[i].style.height = calcularLargoImagen();
  }*/
});