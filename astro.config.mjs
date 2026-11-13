// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    // URL lama menu "Food Nearby" — Food Nearby adalah halaman utama
    '/food-nearby': '/',
  },
});
