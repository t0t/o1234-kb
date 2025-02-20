import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

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
      emptyOutDir: true,
      sourcemap: mode === 'development',
      minify: mode === 'production' ? 'terser' : false,
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production'
        }
      },
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html')
        },
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'index.css') {
              return 'assets/[name].[hash][extname]'
            }
            return 'assets/[name].[hash][extname]'
          }
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