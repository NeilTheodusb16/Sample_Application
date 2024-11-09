import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
    presets: [
    '@babel/preset-env',  // for modern JavaScript
    '@babel/preset-react', // for JSX
  ],
 
})
