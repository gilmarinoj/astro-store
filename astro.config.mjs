// @ts-check
import { defineConfig } from 'astro/config';

import auth from 'auth-astro';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import db from '@astrojs/db';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [auth(), db(), react()],
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: netlify()
});