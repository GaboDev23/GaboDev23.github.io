const body = document.body;
const navItems = document.querySelectorAll('.nav-bar a');
const toggle = document.getElementById('menu-toggle');
const label = document.querySelector('label[for="menu-toggle"]');
const nav = document.querySelector('.nav-bar');
const toggleTheme = document.getElementById('toggle-theme');
const formulario = document.getElementById('contact-form');
const nombre = document.getElementById('nombre');
const errorNombre = document.getElementById('error-nombre');
const email = document.getElementById('email');
const errorEmail = document.getElementById('error-email');
const telefono = document.getElementById('telefono');
const errorTelefono = document.getElementById('error-telefono');

  // Cargar tema guardado
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    toggleTheme.textContent = '🌙';
}

const updateAria = () => {
    const isChecked = toggle.checked;
    label.setAttribute('aria-expanded', isChecked);
    nav.setAttribute('aria-hidden', !isChecked);
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

toggle.addEventListener('change', updateAria);

label.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle.checked = !toggle.checked;
        updateAria();
    }
});

navItems.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
    });
});

toggleTheme.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');

    toggleTheme.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
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