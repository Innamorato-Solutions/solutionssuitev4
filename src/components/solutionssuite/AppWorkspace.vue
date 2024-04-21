<template>
  <div id="AppWorkspace" class="min-h-screen flex flex-col flex-auto max-w-full"
    :style="{ 'padding-left': (SolSuiteStore.showSidebar ? '280' : '0') + 'px !important' }">
    <AppHeader />
    <div class="flex flex-col flex-auto m-2 bg-white">
      <AppTabs />
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from 'vue'
import { useSolutionsSuiteStore } from "../../stores/solutionssuite/solutionsSuiteStore";

import AppFooter from '../solutionssuite/AppFooter.vue';
import AppHeader from '../solutionssuite/AppHeader.vue'
import AppTabs from '../solutionssuite/AppTabs.vue'

const { t } = useI18n(); // use as global scope
const SolSuiteStore = useSolutionsSuiteStore()

</script>
