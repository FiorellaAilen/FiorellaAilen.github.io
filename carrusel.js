let imagenes = ['img/carrusel_foto01.jpg',
    'img/carrusel_foto02.jpg', 'img/carrusel_foto03.jpg',
    'img/carrusel_foto04.jpg','img/carrusel_foto05.jpg'];
let cont = 0;

function carrusel(carru) {
    carru.addEventListener('click', e => {
        let btnatras = carru.querySelector('.btnatras');
        let btnadelante = carru.querySelector('.btnadelante');
        let img = carru.querySelector('img');
        let tgt = e.target;

        if (tgt == btnatras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }

        } else if (tgt == btnadelante) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }

    });

}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.carru');
    carrusel(contenedor);
});



