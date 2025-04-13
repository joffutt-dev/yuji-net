// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import vue from '@astrojs/vue';

import { loadEnv } from "vite";

const { PUBLIC_BASE_URL, PUBLIC_SITE } = loadEnv(process.env.NODE_ENV ?? "", process.cwd(), "");

// https://astro.build/config

export default defineConfig({
  output: "static",
  server: {
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [vue()],
  // base: "/yuji-net"
  site: PUBLIC_SITE,
  base: PUBLIC_BASE_URL
});