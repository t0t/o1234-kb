# Prompt para Recrear el Proyecto

"Crea un proyecto web moderno usando Vite como sistema de construcción. La arquitectura debe estar basada en Web Components nativos, con los siguientes componentes principales: Navbar, Hero, InfoSlides, Uses, Contact, Fundamentals y FAQ.

## Características Principales

1. Navbar:
   - Fondo transparente cuando está en la sección Hero, cambiando a semitransparente con blur al hacer scroll
   - Menú responsive con animaciones suaves
   - Sistema de routing interno usando hash links

2. Hero:
   - Animaciones canvas optimizadas usando requestAnimationFrame
   - Control de visibilidad con IntersectionObserver para pausar animaciones cuando no son visibles
   - Diseño responsive con media queries

3. InfoSlides:
   - Animaciones individuales por cada slide
   - Optimización de rendimiento usando IntersectionObserver
   - Transiciones suaves entre slides

## Requisitos Técnicos

### Desarrollo
- Usa CSS moderno con variables para mantener consistencia en los estilos
- Implementa un sistema de 12 columnas para el layout
- Asegura que todos los componentes sean completamente responsive
- Optimiza el rendimiento, especialmente en dispositivos móviles
- Usa Web Components nativos sin frameworks adicionales

### Estructura
- Archivo index.html en la raíz como punto de entrada
- Archivo main.js para inicializar los componentes
- Organización modular de componentes en carpetas separadas

## Configuración de Entornos

### Desarrollo
- Base URL: `/`
- Source maps habilitados
- Hot Module Replacement (HMR)
- Servidor de desarrollo con Vite

### Producción
- Base URL: `/o1234-kb/`
- Código minificado y optimizado
- Assets procesados y versionados
- Despliegue automático en GitHub Pages

## Despliegue

### GitHub Pages
1. Configura el repositorio para usar la rama `main`
2. Los archivos de build se generan en `dist/`
3. El despliegue se realiza automáticamente al hacer push
4. La URL de producción será: https://[username].github.io/o1234-kb/

### Scripts de NPM
```bash
npm run dev         # Desarrollo
npm run build      # Build de producción
npm run build:dev  # Build de desarrollo
npm run preview    # Vista previa local
```
