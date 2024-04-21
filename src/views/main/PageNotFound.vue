<template>

<div class="flex surface-section">
    <div class="w-12 sm:w-6 px-4 py-8 md:px-6 lg:px-8">
        <div class="border-left-2 border-pink-500">
            <span class="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
        </div>
        <div class="mt-6 mb-5 font-bold text-6xl text-900">Page Not Found</div>
        <p class="text-700 text-3xl mt-0 mb-6">Sorry, we couldn't find the page.</p>
        <div>
            <Button class="p-button-text mr-2" label="Go Back" icon="pi pi-arrow-left"></Button>
            <Button label="Go to Dashboard" icon="pi pi-home" @click="goTo('/')"></Button>
        </div>
    </div>
    <div class="w-6 hidden sm:block" style="background-size: cover">
    </div>
</div>
  </template>
  
  <script setup>
  import { useI18n } from "vue-i18n";
  import { useRouter } from "vue-router";
  const { t } = useI18n(); // use as global scope
  const router = useRouter();
  
  const goTo = (routeName) => {
    router.push(routeName);
  };
  </script>
  
  
  