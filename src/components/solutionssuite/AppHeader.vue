<template>
  <div id="AppHeader" class="bg-white px-5 py-2 shadow-md flex flex-row flex-nowrap gap-8" style="height: 60px">
    <div class="flex-none">
      <a class="cursor-pointer block text-800 mr-3 mt-1 p-ripple" @click="SolSuiteStore.toggleSidebar()">
        <i class="pi pi-bars text-3xl"></i>
      </a>
    </div>
    <div class="grow pt-2 text-center">Innamorato Solutions</div>
    <div class="flex-none pt-2">
      <a class="cursor-pointer text-600">
        <i class="pi pi-bell text-base sm:text-2xl" v-badge.danger></i>
      </a>
    </div>
    <div class="flex-none pt-1">
      <SplitButton :model="userItems" label="Antonio Innamorato" icon="pi pi-plus" size="small" text severity="success">
      </SplitButton>
    </div>
  </div>
  <Dialog v-model:visible="userSettingsVisible" modal header="Header" :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <template #header>
      <div class="inline-flex items-center justify-center gap-2">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
        <span class="font-bold whitespace-nowrap	">Antonio
          Innamorato</span>
      </div>
    </template>
    <div class="m-0.5">
      <h2 class="font-bold mb-2">Profil anpassen</h2>
      <div class="grid grid-cols-2 gap-2">
        <div class="flex flex-col gap-1 mb-2">
          <label for="username">Anrede</label>
          <InputText id="username" v-model="value" disabled aria-describedby="username-anrede" />
        </div>
        <div></div>
        <div class="flex flex-col gap-1 mb-2">
          <label for="name">Vorname</label>
          <InputText id="name" v-model="value" disabled aria-describedby="username-help" />
        </div>
        <div class="flex flex-col gap-1 mb-2">
          <label for="surname">Nachname</label>
          <InputText id="surname" v-model="value" disabled aria-describedby="username-help" />
        </div>
        <div class="flex flex-col gap-1 col-span-2 mb-2">
          <label for="email">E-Mail</label>
          <InputText id="email" v-model="value" disabled aria-describedby="username-help" />
        </div>
        <div class="flex flex-col gap-1 mb-2">
          <label for="language">{{ t('test') }}</label>
          <Dropdown id="language" v-model="locale" :options="locales" option-label="name" optionValue="code"
            :placeholder="getPlhLang(locale)" aria-describedby="username-help" />
        </div>
        <Button class="bx-btn place-self-end mb-2.5 max-h-10 w-full" raised>
          <div class="flex align-items-center gap-2 px-1">
            <img align="start" alt="bexio icon" :src="bxIcon" style="width: 25px; height: 25px" />
            <span class="text-base">Daten aus Bexio übernehmen</span>
          </div>
        </Button>
      </div>
    </div>
    <template #footer>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref, inject } from 'vue'
import { useSolutionsSuiteStore } from "../../stores/solutionssuite/solutionsSuiteStore";
import { MenuItem } from "primevue/menuitem";
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import { bxIcon } from "../../assets/base64/index";

const SolSuiteStore = useSolutionsSuiteStore()

const { t, locale } = useI18n({ useScope: 'global' })
const $i18n = inject('$i18n')

const locales = ref([
  { name: 'Deutsch', code: 'de' },
  { name: 'English', code: 'en' },
  { name: 'Français', code: 'fr' },
  { name: 'Italiano', code: 'it' },
]);

function getPlhLang(locale: string): string {
  locales.value.filter(x => {
    if (x.code === locale) {
      return x.name
    }
  })
  return ''
}


const userSettingsVisible = ref(false)
const value = ref('Antonio')

const userItems: MenuItem[] = [
  {
    icon: 'pi pi-cog',
    label: 'Einstellungen',
    command() {
      userSettingsVisible.value = true
    },
  },
  {
    separator: true
  },
  {
    icon: 'pi pi-lock',
    label: 'Abmelden',
    command() { },
  },
]



</script>

<style scoped>
.bx-btn {
  color: rgb(34, 43, 13);
  background-color: rgb(157, 196, 60);
}
</style>