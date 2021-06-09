// vite.config.js
import { defineConfig } from 'vite';
// Plugins
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
import commonjs from '@rollup/plugin-commonjs';

const config = defineConfig({
  root: 'app',
  plugins: [
    reactRefresh(),
    svgr(),
    commonjs({
      include: 'app/i18n.cjs',
      namedExports: { 'react': ['createElement', 'Component'] },
    }),
  ],
  // * Server Config
  server: {
    port: 25500,
    host: true, //  Network Host
  },
});

export default config;
