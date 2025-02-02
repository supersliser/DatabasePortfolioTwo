// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel/serverless';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});