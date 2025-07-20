// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://taumax-github.github.io',
    // base: 'sagamax',
    integrations: [mdx(), sitemap()],
});
