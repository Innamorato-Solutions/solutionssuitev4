<template>
  <div id="AppTabs" class="flex flex-col flex-auto m-4 bg-white">
    <TabView :activeIndex="SolSuiteStore.tabActiveKey" :scrollable="true" class="tabview-custom">
      <TabPanel v-for="(app, index) in SolSuiteStore.apps">
        <template #header>
          <div :id="`${app.name}-${index}-header`" class=" w-full text-nowrap">
            <span>Label manuell erstellen</span>
            <Button @click.stop="SolSuiteStore.removeApp(index)" class="z-10" icon=" pi pi-times" severity="info" text
              rounded aria-label="Cancel"></Button>
          </div>
        </template>
        <CreateLabelsManual />
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref, watch } from 'vue'
import { useSolutionsSuiteStore } from "../../stores/solutionssuite/solutionsSuiteStore";
import CreateLabelsManual from '../sdss/CreateLabelsManual.vue'

const { t } = useI18n(); // use as global scope
const SolSuiteStore = useSolutionsSuiteStore()

</script>
