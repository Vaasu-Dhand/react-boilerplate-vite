// vite.config.js
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

const config = defineConfig({
  root: 'app',
  plugins: [reactRefresh()],
});

export default config;
