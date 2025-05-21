import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  theme:{
    extend:{
      colors:{
        themeyellow:"#f5e60d",
        themepupple: "#502ec3",
      },
    },
  }, 
})
