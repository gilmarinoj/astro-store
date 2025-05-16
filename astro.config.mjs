// @ts-check
import { defineConfig } from 'astro/config';

import auth from 'auth-astro';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';


import react from '@astrojs/react';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [auth(), react(), db()],
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: netlify()
});