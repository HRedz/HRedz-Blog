import autoprefixer from 'autoprefixer';
import daisyui from 'daisyui';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-import': {},
  },
};

export default config;
