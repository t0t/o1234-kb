# Documentación del Proyecto

## Estructura del Proyecto
```
src/
├── css/
│   └── global.css
├── js/
│   └── components/
│       ├── Navbar.js
│       ├── Hero.js
│       ├── InfoSlides.js
│       ├── Uses.js
│       ├── Contact.js
│       ├── Fundamentals.js
│       └── FAQ.js
├── index.html
└── main.js
```

## Características Técnicas
1. **Sistema de Construcción:** Vite
2. **Arquitectura:** Web Components
3. **Estilos:** CSS moderno con variables
4. **Optimización:** IntersectionObserver, requestAnimationFrame
5. **Responsive Design:** Media queries y diseño adaptable
6. **Animaciones:** Canvas optimizadas con control de visibilidad

## Componentes Clave

### Navbar
- Fondo transparente/opaco según scroll
- Menú responsive
- Sistema de routing interno
- IntersectionObserver para animaciones

### Hero
- Animaciones canvas optimizadas
- Control de visibilidad con IntersectionObserver
- Diseño responsive

### InfoSlides
- Animaciones individuales por slide
- Optimización de rendimiento
- Control de visibilidad con IntersectionObserver
