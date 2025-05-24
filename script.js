const body = document.body; // Selecciona el <body> para poder modificarle la clase del tema
const navItems = document.querySelectorAll('.nav-bar a'); // Selecciona todos los enlaces del menú de navegación
const toggle = document.getElementById('menu-toggle'); // Obtiene el input checkbox que controla la apertura/cierre del menú hamburguesa
const label = document.querySelector('label[for="menu-toggle"]'); // Obtiene la etiqueta <label> asociada al checkbox (ícono del menú hamburguesa)
const nav = document.querySelector('.nav-bar'); // Selecciona el contenedor del menú de navegación
const toggleTheme = document.getElementById('toggle-theme'); // Botón para cambiar entre tema claro/oscuro
const formulario = document.getElementById('contact-form');
const nombre = document.getElementById('nombre');
const errorNombre = document.getElementById('error-nombre');
const email = document.getElementById('email');
const errorEmail = document.getElementById('error-email');
const telefono = document.getElementById('telefono');
const errorTelefono = document.getElementById('error-telefono');

// =======================================
// Al cargar la página: aplica tema claro si está guardado en localStorage
// =======================================

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme'); // Aplica clase para tema claro
    toggleTheme.textContent = '🌙'; // Cambia el ícono del botón de tema
}

// =======================================
// Función para actualizar atributos de accesibilidad
// =======================================

const updateAria = () => {
    const isChecked = toggle.checked; // Verifica si el menú está abierto
    label.setAttribute('aria-expanded', isChecked); // Informa si el menú está expandido
    nav.setAttribute('aria-hidden', !isChecked); // Oculta o muestra el menú para lectores de pantalla
}

const cambiarMensaje = (elemento, color, mensaje) => {
    elemento.style.display = 'block';
    elemento.style.color = color;
    elemento.textContent = mensaje;
}

const validarNombre = nombre => {
    if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ]{3,}( [A-Za-zÁÉÍÓÚÑáéíóúñ]{3,})+$/.test(nombre)) {
        return false;
    }

    return true;
}

const validarEmail = email => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return false;
    }
    
    return true;
}

const validarTelefono = telefono => {
    if (!/^\+?[0-9\s\-()]{7,20}$/.test(telefono)) {
        return false;
    }
    return true;
}

toggle.addEventListener('change', updateAria); // Cuando se cambia el estado del checkbox (abrir/cerrar menú), actualiza los atributos ARIA

// =======================================
// Habilita accesibilidad con teclado: abre/cierra el menú con Enter o Barra espaciadora
// =======================================

label.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { // Si se presiona Enter o Espacio...
        e.preventDefault(); // Previene el comportamiento por defecto (scroll, por ejemplo)
        toggle.checked = !toggle.checked; // Cambia el estado del checkbox manualmente
        updateAria(); // Actualiza los atributos ARIA
    }
});

// =======================================
// Cuando se hace clic en un ítem del menú, se cierra automáticamente el menú hamburguesa
// =======================================

navItems.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false; // Desactiva el checkbox
    });
});

// =======================================
// Alterna entre tema claro y oscuro
// =======================================

toggleTheme.addEventListener('click', () => {
    body.classList.toggle('light-theme'); // Cambia la clase del tema en el body
    const isLight = body.classList.contains('light-theme'); // Verifica si el tema actual es claro

    toggleTheme.textContent = isLight ? '🌙' : '☀️'; // Cambia el ícono según el tema activo
    localStorage.setItem('theme', isLight ? 'light' : 'dark'); // Guarda la preferencia de tema en localStorage
});

formulario.addEventListener('submit', e => {
    e.preventDefault();

    if (validarNombre(nombre.value)) {
        cambiarMensaje(errorNombre, '#090', 'Nombre válido.');
        if (validarEmail(email.value)) {
            cambiarMensaje(errorEmail, '#090', 'Correo válido');
            if (validarTelefono(telefono.value)) {
                cambiarMensaje(errorTelefono, '#090', 'Teléfono válido');
            } else {
                cambiarMensaje(errorTelefono, '#f00', 'El teléfono no tiene un formato válido.');
            }
        } else {
            cambiarMensaje(errorEmail, '#f00', 'El correo no tiene un formato válido.');
        }
    } else {
        cambiarMensaje(errorNombre, '#f00', 'El nombre debe contener al menos dos palabras con solo letras.');
    }
});