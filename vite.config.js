// vite.config.js
import reactRefresh from '@vitejs/plugin-react-refresh';
import vite from 'vite';

const config = vite.defineConfig({
  plugins: [reactRefresh()],
});

export default config;
