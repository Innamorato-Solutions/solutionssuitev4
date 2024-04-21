import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import PrimeVue from "primevue/config";
import Tailwind_Lara from './presets'
import router from "./router/index.js";
import StyleClass from 'primevue/styleclass';
import Ripple from 'primevue/ripple';
import BadgeDirective from 'primevue/badgedirective';


import de from "./locales/de.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";

const i18n = createI18n({
  locale: "de",
  fallbackLocale: "de",
  legacy: false,
  globalInjection: true,
  messages: {
    de: de,
    en: en,
    fr: fr,
    it: it,
  },
});

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
  unstyled: true,
  pt: Tailwind_Lara
});
app.use(i18n);
app.use(pinia);
app.directive('styleclass', StyleClass);
app.directive('ripple', Ripple);
app.directive('badge', BadgeDirective);

app.mount("#app");
app.provide('$i18n', i18n)
