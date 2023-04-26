let inputImagen = document.getElementById("input-file");
let carrusel = document.getElementById('carousel');
let carruselInner = carrusel.querySelector('.carousel-inner');
let cantMulMax = 0.0
let cantMulMin = 0.0

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
            img.style.width = calcularAnchoImagen();
            img.style.height = calcularLargoImagen();


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


function calcularAnchoImagen() {
  // Obtenemos la resolución de la pantalla
  let screenWidth = window.innerWidth;

  // Calculamos el ancho de la imagen
  let imageWidth = screenWidth * 0.5;

  if (imageWidth > 380){
    imageWidth = 380;
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


  // Asignamos el ancho calculado a la imagen
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


if (screenWidth >= 718 && screenWidth <= 770) {
  fl_iz.style.left = '30px'
  fl_dr.style.right = '30px'
  
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
  calcularPosFlechas()

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.width = calcularAnchoImagen();
    imgs[i].style.height = calcularLargoImagen();
  }
});