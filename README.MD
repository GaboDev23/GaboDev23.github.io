# GaboDev - Portafolio Personal

Este es el portafolio web de **Gilberto Gabriel Herling Barriola**, también conocido como **GaboDev**, donde presento mi perfil como desarrollador frontend, mis habilidades, servicios y una vía de contacto para futuros proyectos.

## 📂 Archivos del Proyecto

### `index.html`
Archivo principal del sitio. Contiene:

- Una presentación sobre mí y mis habilidades técnicas.
- Una sección de proyectos personales (actuales y en desarrollo).
- Un apartado con los servicios que ofrezco como desarrollador frontend.
- Un formulario de contacto funcional, integrado con [Formspree](https://formspree.io/).
- Un footer con enlaces a redes sociales y la política de privacidad.

# Encabezado del sitio web - GABODEV

Este encabezado pertenece al sitio personal **GABODEV**, diseñado con enfoque en **usabilidad**, **accesibilidad**, **estética moderna** y **responsive design**. Contiene un logotipo, un menú de navegación adaptativo, un botón para cambiar el tema (modo claro/oscuro) y está optimizado para dispositivos móviles.

---

## 📌 Estructura HTML del Header

```html
<header>
  <!-- LOGO -->
  <h1 title="Volver al inicio"><a href="#inicio">GABODEV</a></h1>

  <!-- BOTÓN PARA DESPLEGAR EL MENÚ EN MÓVILES -->
  <input type="checkbox" id="menu-toggle" class="menu-toggle" aria-label="Abrir menú de navegación"/>
  <label for="menu-toggle" class="menu-icon" tabindex="0" role="button" aria-controls="menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
  </label>

  <!-- MENÚ DE NAVEGACIÓN -->
  <nav class="nav-bar" role="navigation" aria-label="Menú principal">
    <a href="#sobre-mi">Sobre mí</a>
    <a href="#proyectos">Proyectos</a>
    <a href="#servicios">Servicios</a>
    <a href="#contacto">Contacto</a>
  </nav>

  <!-- BOTÓN DE CAMBIO DE TEMA -->
  <button id="toggle-theme" class="theme-toggle" aria-label="Cambiar tema">☀️</button>
</header>
```

---

## 🎨 Estilos CSS Destacados

- **Diseño fijo y sombreado:** el header se mantiene en la parte superior con `position: fixed` y una ligera sombra.
- **Tema claro/oscuro:** usa variables CSS (`--bg-color`, `--text-color`, etc.) que se modifican dinámicamente.
- **Menú hamburguesa:** visible solo en pantallas pequeñas mediante media queries.
- **Animaciones suaves:** para el fade-in del header y la transición de temas.

---

## 🔁 Comportamiento Responsive

Para dispositivos móviles:

- El menú de navegación se oculta por defecto.
- Se activa un ícono de menú hamburguesa (`.menu-icon`) que despliega los enlaces.
- Usa un checkbox invisible para controlar la visibilidad del menú con transiciones suaves.
- Las barras del ícono se transforman en una "X" cuando el menú está abierto.

---

## ♿ Accesibilidad

- Todos los elementos interactivos tienen `aria-label` o roles adecuados.
- El menú se puede controlar con teclado (tecla `Enter` o `Espacio`).
- Se actualizan dinámicamente `aria-expanded` y `aria-hidden`.
- El botón de cambio de tema tiene un `aria-label` claro y cambia el ícono según el estado.

---

## 🧠 JavaScript Funcional

```js
// Cambia entre tema claro y oscuro
toggleTheme.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  toggleTheme.textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Carga el tema guardado
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  toggleTheme.textContent = '🌙';
}

// Controla atributos ARIA y teclado para el menú hamburguesa
```

---

## ✅ Funcionalidades completas

- [x] Logo con enlace al inicio.
- [x] Menú de navegación accesible.
- [x] Menú responsive con hamburguesa animada.
- [x] Cambio de tema claro/oscuro persistente con `localStorage`.
- [x] Diseño adaptable y moderno.
- [x] Animaciones sutiles para mejorar UX.

---

## 🧪 Pruebas sugeridas

- Prueba con teclado: navegación con `Tab`, apertura del menú con `Espacio` o `Enter`.
- Cambia el tema y recarga: debería mantenerse el modo seleccionado.
- Accede desde dispositivos móviles y verifica el comportamiento del menú.

---

### `politica-privacidad.html`
Describe las políticas de privacidad del sitio. Contiene:

- Qué datos personales se recopilan y con qué propósito.
- Aclaración de que el sitio **no utiliza cookies**.
- Tus derechos como usuario (acceso, corrección y eliminación de datos).
- Información de contacto en caso de consultas sobre privacidad.

## 🎨 Estilos y diseño

- `styles.css`: hoja de estilos enlazada a ambas páginas para un diseño coherente, moderno y responsivo.
- Uso de tipografías de Google Fonts (`Inter`, `Montserrat`) y de iconos con FontAwesome.

## 🚀 Tecnologías utilizadas

- **HTML5** y **CSS3** para la estructura y el diseño.
- **JavaScript** para funcionalidades del formulario y menú responsive (incluido en `script.js`).
- **Formspree** para la gestión del formulario de contacto sin necesidad de backend.

## 📄 Licencia

Este proyecto es de uso personal. Puedes consultarlo y usarlo como inspiración educativa, pero se prohíbe su distribución o reproducción sin autorización.

---

**© 2025 Gilberto Gabriel Herling Barriola**
