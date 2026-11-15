// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  site: 'https://junesaturn.me',
  integrations: [vue()],
  vite: {
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
  },
})