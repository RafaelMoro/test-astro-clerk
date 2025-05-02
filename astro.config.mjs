// @ts-check
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import { neobrutalism } from '@clerk/themes';
import { esES } from '@clerk/localizations';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [clerk({
    appearance: {
      baseTheme: neobrutalism,
    },
    localization: esES
  })],
  adapter: node({ mode: "standalone" }),
  output: "server"
});