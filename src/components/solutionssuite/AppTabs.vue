<template>
  <div id="AppTabs" class="flex flex-col flex-auto m-4 bg-white">
    <TabView :activeIndex="SolSuiteStore.tabActiveKey" :scrollable="true" class="tabview-custom">
      <TabPanel v-for="(app, index) in SolSuiteStore.apps">
        <template #header>
          <div :id="`${app.name}-${index}-header`" class=" w-full text-nowrap">
            <span>Label manuell erstellen {{ index }}</span>
            <Button @click.stop="SolSuiteStore.removeApp(index)" class="z-10" icon=" pi pi-times" severity="info" text
              rounded aria-label="Cancel"></Button>
          </div>
        </template>
        <p :id="`${app.name}-${index}-panel`" class="m-0">
          {{ app.name }}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref, watch } from 'vue'
import { useSolutionsSuiteStore } from "../../stores/solutionssuite/solutionsSuiteStore";

const { t } = useI18n(); // use as global scope
const SolSuiteStore = useSolutionsSuiteStore()

</script>
