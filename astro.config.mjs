// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  output: "static",
  server: {
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [vue()]
});