import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  // Cargar variables de entorno según el modo (development/production)
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    // Base URL según el entorno
    base: '/o1234-kb/',

    // Configuración de CSS
    css: {
      devSourcemap: mode === 'development'
    },

    // Configuración de build
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
      minify: mode === 'production' ? 'terser' : false,
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production'
        }
      },
      // Asegurarnos que los assets se sirven con rutas relativas
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js'
        }
      }
    },

    // Configuración del servidor de desarrollo
    server: {
      hmr: true,
      watch: {
        usePolling: true
      },
      port: 3000,
      open: true
    },

    // Configuración de preview
    preview: {
      port: 8080
    }
  }
})