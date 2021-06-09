// vite.config.js
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

const config = defineConfig({
  root: 'app',
  plugins: [reactRefresh(), svgr()],
  // * Server Config
  server: {
    port: 25500,
    host: true, //  Network Host
  },
});

export default config;
