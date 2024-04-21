<template>
  <div id="SolutionsSuite" class="min-h-screen flex flex-row" style="background-color: #c2c9d6;">
    <AppSidebar />
    <AppWorkspace />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { onMounted } from 'vue'
import { useSolutionsSuiteStore } from '../../../stores/solutionssuite/solutionsSuiteStore'
import AppSidebar from "../../../components/solutionssuite/AppSidebar.vue";
import AppWorkspace from "../../../components/solutionssuite/AppWorkspace.vue";


const { t } = useI18n(); // use as global scope
const router = useRouter();
const SolSuiteStore = useSolutionsSuiteStore()

onMounted(() => {
  console.log(`the component is now mounted.`)
})

const goTo = (routeName) => {
  router.push(routeName);
};
</script>

<script>

</script>
<style scoped></style>