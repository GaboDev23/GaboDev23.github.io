const images = document.querySelectorAll('.image');
const imageCounter = document.getElementById('image-counter');
const imageCaption = document.getElementById('image-caption');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const buttons = document.querySelectorAll('.button');

const captions = ['Caption Text', 'Caption Two', 'Caption Three', 'Caption Four'];

const eliminarClase = (elemento, clase) => {
    elemento.forEach(el => el.classList.remove(clase));
}

const cambiarImagen = index => {
    eliminarClase(images, 'opacity');
    eliminarClase(buttons, 'active');

    images[index].classList.add('opacity');
    imageCounter.textContent = `${index + 1} / ${images.length}`;
    imageCaption.textContent = captions[index];
    buttons[index].classList.add('active');
}

const obtenerIndiceActivo = () => {
    return [...images].findIndex(image => image.classList.contains('opacity'));
};

buttons.forEach((button, index) => {
    button.addEventListener('click', () => cambiarImagen(index));
});

arrowLeft.addEventListener('click', () => {
    let currentIndex = obtenerIndiceActivo();
    let prevIndex = (currentIndex - 1 + images.length) % images.length;
    cambiarImagen(prevIndex);
});

arrowRight.addEventListener('click', () => {
    let currentIndex = obtenerIndiceActivo();
    let nextIndex = (currentIndex + 1) % images.length;
    cambiarImagen(nextIndex);
});