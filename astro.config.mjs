// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://safo.my.id',
  output: 'static',
  redirects: {
    // URL lama menu "Food Nearby" — Food Nearby adalah halaman utama
    '/food-nearby': '/',
  },
});
