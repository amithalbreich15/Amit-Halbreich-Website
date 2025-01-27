import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/Amit-Halbreich-Website/', // This must match your GitHub repository name
});
