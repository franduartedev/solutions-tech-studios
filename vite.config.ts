import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages sirve el sitio en /solutions-tech-studios/. En Vercel o dominio propio: VITE_BASE=/ npm run build
export default defineConfig({
  base: process.env.VITE_BASE ?? '/solutions-tech-studios/',
  plugins: [react(), tailwindcss()],
  build: { target: 'es2022', sourcemap: false },
});
