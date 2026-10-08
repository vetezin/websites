import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.gazzetti.com.br',
  base: process.env.SITE_BASE_PATH || '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
