import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/todo-app/', // Your GitHub repo name
  plugins: [react()],
  server: {
    port: 5173,
  },
});
