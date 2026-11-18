import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jeniebeez.github.io',
  base: '/my_blog',
  integrations: [sitemap()],
});
