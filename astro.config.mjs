import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import path from 'path';
import { fileURLToPath } from 'url';
import glsl from 'vite-plugin-glsl';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { SITE } from './src/config.mjs';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) => SITE.googleAnalyticsId ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];


// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  adapter: vercel(),
  output: 'server',
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin]
  },
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), mdx(), ...whenExternalScripts(() => partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })), compress({
    css: true,
    html: {
      removeAttributeQuotes: false
    },
    img: false,
    js: true,
    svg: false,
    logger: 1
  })],
  vite: {
    plugins: [glsl()],
    ssr: {
      noExternal: ['usehooks-ts']
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  }
});