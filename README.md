# Documentación del Proyecto

## Estructura del Proyecto
```
src/
├── css/
│   └── styles.css
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

## Desarrollo

### Requisitos Previos
- Node.js (versión recomendada: 18.x o superior)
- npm (incluido con Node.js)

### Comandos Disponibles
```bash
# Desarrollo
npm run dev         # Inicia el servidor de desarrollo

# Construcción
npm run build      # Construye la versión de producción
npm run build:dev  # Construye la versión de desarrollo

# Preview
npm run preview:dev   # Vista previa de la versión de desarrollo
npm run preview:prod  # Vista previa de la versión de producción

# Utilidades
npm run clean      # Limpia la carpeta de distribución
```

### Entornos
El proyecto está configurado para dos entornos:

1. **Desarrollo**
   - Base URL: `/`
   - Source maps habilitados
   - Sin minificación
   - Hot Module Replacement (HMR)

2. **Producción**
   - Base URL: `/o1234-kb/`
   - Código minificado
   - Sin source maps
   - Optimizaciones de rendimiento

## Despliegue

### GitHub Pages
El proyecto está configurado para desplegarse automáticamente en GitHub Pages:

1. La rama `main` se usa para el código fuente
2. Los archivos de build se generan en la carpeta `dist`
3. GitHub Pages está configurado para usar la rama `main`

Para desplegar:
1. Hacer cambios en el código
2. Ejecutar `npm run build`
3. Commit y push a la rama `main`
4. GitHub Actions se encargará del despliegue automáticamente

URL de producción: https://t0t.github.io/o1234-kb/

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
