<template>
  <LabelCounterAndHelp />
  <h2 class="font-medium text-xl mb-2">Adresse</h2>
  <hr class="mb-2">
  <div id="manualCreationForm" class="grid grid-cols-6 gap-6">
    <div class="flex flex-col gap-1 mb-2 col-span-4">
      <label for="anrede" class="mx-1">Anrede</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" />
      <span class="mx-1 text-sm  font-light">Darf maximal 35 Zeichen beinhalten</span>
    </div>
    <div class="flex flex-row gap-1 col-span-2 self-center place-self-end">
      <Checkbox class="" id="private" v-model="isPersonallyAddressed" :binary="true" />
      <label for="private">Persönliche Anschrift</label>
    </div>
    <div v-if="isPersonallyAddressed" class="flex flex-col gap-1 mb-2 col-span-3">
      <label for="anrede" class="mx-1">Anrede</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" />
      <span class="mx-1 text-sm  font-light">Darf maximal 35 Zeichen beinhalten</span>
    </div>
    <div class="flex flex-col gap-1 mb-2 col-span-3">
      <label for="anrede" class="mx-1">Anrede</label>
      <InputText id="anrede" v-model="value" aria-describedby="username-anrede" />
      <span class="mx-1 text-sm  font-light">Darf maximal 35 Zeichen beinhalten</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref, watch } from 'vue'
import { useSolutionsSuiteStore } from "../../stores/solutionssuite/solutionsSuiteStore";
import LabelCounterAndHelp from '../sdss/LabelCounterAndHelp.vue'

const { t } = useI18n(); // use as global scope
const SolSuiteStore = useSolutionsSuiteStore()
const isPersonallyAddressed = ref(false)
const value = ref('false')

</script>