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
  i18n: {
    locales: [
      { path: 'en-gb', codes: ['en-GB'] },
      { path: 'en-us', codes: ['en-US'] },
      { path: 'fr-fr', codes: ['fr-FR'] },
      { path: 'ko-kr', codes: ['ko-KR'] },
    ],
    defaultLocale: 'en-us',
    routing: { prefixDefaultLocale: false },
  },
})