import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
    resolve: {
    alias: {
      Animations: path.resolve(__dirname, 'src/Animations'),
      Reactbits: path.resolve(__dirname, 'src/Reactbits')
    }
  }
    
})
