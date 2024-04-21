import { defineConfig } from 'vite'
import Components from "unplugin-vue-components/vite";
import vue from "@vitejs/plugin-vue";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  Components({
    resolvers: [PrimeVueResolver()],
  }),
  VueI18nPlugin({
    strictMessage: false,
  }),
  ],
})