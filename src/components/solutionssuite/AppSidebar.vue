<template>
  <div id="AppSidebar" class="bg-white min-h-screen fixed block h-full left-0 top-0 surface-border select-none shadow"
    :style="{ width: (SolSuiteStore.showSidebar ? '280' : '0') + 'px !important', visibility: SolSuiteStore.showSidebar ? 'visible' : 'hidden' }">
    <div class="h-full">
      <div class="grid grid-cols-1 place-content-start shadow" style="height: 60px">
        <div class="self-auto"><img class="scale-75" src="../../assets/images/partners/int_logo_bexio.ico" alt="Image"
            height="30" />
        </div>
      </div>
      <Tree :value="nodes" @nodeSelect="onNodeSelect" selectionMode="single" class="mt-4 w-full border-0">
      </Tree>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from 'vue'
import { useSolutionsSuiteStore } from "../../stores/solutionssuite/solutionsSuiteStore";
import { App } from "../../stores/ts_types/SolSuiteState";


const { t } = useI18n(); // use as global scope
const SolSuiteStore = useSolutionsSuiteStore()
const onNodeSelect = (node) => {
  const nApp: App = { name: 'Test', active: true }
  SolSuiteStore.openApp(nApp)
};

const nodes = ref([
  {
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
      {
        key: '0-0',
        label: 'Work',
        data: 'Work Folder',
        icon: 'pi pi-fw pi-cog',
        children: [
          { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
          { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
        ]
      },
      {
        key: '0-1',
        label: 'Home',
        data: 'Home Folder',
        icon: 'pi pi-fw pi-home',
        children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
      }
    ]
  },
  {
    key: '1',
    label: 'Events',
    data: 'Events Folder',
    icon: 'pi pi-fw pi-calendar',
    children: [
      { key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
      { key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
      { key: '1-2', label: 'Report Review', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' }
    ]
  },
  {
    key: '2',
    label: 'Movies',
    data: 'Movies Folder',
    icon: 'pi pi-fw pi-star-fill',
    children: [
      {
        key: '2-0',
        icon: 'pi pi-fw pi-star-fill',
        label: 'Al Pacino',
        data: 'Pacino Movies',
        children: [
          { key: '2-0-0', label: 'Scarface', icon: 'pi pi-fw pi-video', data: 'Scarface Movie' },
          { key: '2-0-1', label: 'Serpico', icon: 'pi pi-fw pi-video', data: 'Serpico Movie' }
        ]
      },
      {
        key: '2-1',
        label: 'Robert De Niro',
        icon: 'pi pi-fw pi-star-fill',
        data: 'De Niro Movies',
        children: [
          { key: '2-1-0', label: 'Goodfellas', icon: 'pi pi-fw pi-video', data: 'Goodfellas Movie' },
          { key: '2-1-1', label: 'Untouchables', icon: 'pi pi-fw pi-video', data: 'Untouchables Movie' }
        ]
      }
    ]
  }
])

</script>
