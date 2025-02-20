export default {
  // Habilitar source maps en desarrollo
  css: {
    devSourcemap: true
  },
  build: {
    sourcemap: true, // Generar source maps en producción
    minify: 'terser',
    terserOptions: {
      sourceMap: true
    }
  },
  // Optimizaciones para desarrollo
  server: {
    hmr: true, // Hot Module Replacement
    watch: {
      usePolling: true
    }
  }
}