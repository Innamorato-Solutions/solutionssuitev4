<template>
  <ProgressBar mode="indeterminate" style="height: 7px"></ProgressBar>
  <h1 class="text-center">Willkommen zur Solutions Suite</h1>
  <h2 class="text-center">Sie werden angemeldet</h2>

  <Button label="Login" class="bx-btn w-full" raised @click="goTo('/bexio/solutionssuite')">
  </Button>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { onMounted } from 'vue'

const { t } = useI18n(); // use as global scope
const router = useRouter();

onMounted(() => {
  console.log(`the component is now mounted.`)
})

const goTo = (routeName) => {
  router.push(routeName);
};
</script>

<style scoped></style>
