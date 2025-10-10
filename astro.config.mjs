// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "./src/styles/_mixins.scss" as mixin;
          @use "./src/styles/_vars.scss" as var;
          `,
        },
      },
    },
  },
  site: 'https://taumax-github.github.io',
  // base: 'sagamax',
  integrations: [mdx(), sitemap()],
});
