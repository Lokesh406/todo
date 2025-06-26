import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/todo-app/', // 👈 MUST match your GitHub repo name exactly
  plugins: [react()],
  server: {
    port: 5173, // optional: useful for local dev
  },
});
