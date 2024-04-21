<template>
  <div class="p-1 sm:p-3 md:p-6 lg:p-10">
    <div class="grid grid-cols-4 grid-flow-rows">
      <img
        src="../../assets/images/sdss/black_icon_transparent_background.png"
        alt="Image"
        class="row-span-1 col-span-4 mb-8 w-1/5 sm:max-w-1/5 justify-self-center"
      />
      <div
        class="row-span-2 col-span-2 lg:p-7"
        style="background-color: rgba(255, 255, 255, 0.7)"
      >
        <div class="text-900 text-2xl font-medium mb-3">
          Welcome to Swiss Digital Shipping Solutions
        </div>
        <p class="text-600 line-height-3 mt-0 mb-6">
          Quis vel eros donec ac odio tempor orci dapibus. In hac habitasse
          platea dictumst quisque.
        </p>
        <ul class="list-none p-0 m-0">
          <li class="flex align-items-start mb-4">
            <div>
              <span
                class="flex align-items-center justify-content-center bg-purple-400"
                style="width: 38px; height: 38px; border-radius: 10px"
              >
                <i class="text-xl text-white pi pi-inbox"></i>
              </span>
            </div>
            <div class="ml-3">
              <span class="font-medium text-900">Unlimited Inbox</span>
              <p class="mt-2 mb-0 text-600 line-height-3">
                Tincidunt nunc pulvinar sapien et. Vitae purus faucibus ornare
                suspendisse sed nisi lacus sed viverra.
              </p>
            </div>
          </li>
          <li class="flex align-items-start mb-4">
            <div>
              <span
                class="flex align-items-center justify-content-center bg-purple-400"
                style="width: 38px; height: 38px; border-radius: 10px"
              >
                <i class="text-xl text-white pi pi-shield"></i>
              </span>
            </div>
            <div class="ml-3">
              <span class="font-medium text-900">Premium Security</span>
              <p class="mt-2 mb-0 text-600 line-height-3">
                Scelerisque purus semper eget duis at tellus at urna. Sed risus
                pretium quam vulputate.
              </p>
            </div>
          </li>
          <li class="flex align-items-start">
            <div>
              <span
                class="flex align-items-center justify-content-center bg-purple-400"
                style="width: 38px; height: 38px; border-radius: 10px"
              >
                <i class="text-xl text-white pi pi-globe"></i>
              </span>
            </div>
            <div class="ml-3">
              <span class="font-medium text-900">Cloud Backups Inbox</span>
              <p class="mt-2 mb-0 text-600 line-height-3">
                Egestas sed tempus urna et. Auctor elit sed vulputate mi sit
                amet mauris commodo.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="row-span-2 col-span-2 lg:p-7 surface-card flex flex-col justify-between"
      >
        <div class="text-900 text-2xl font-medium mb-6">Anmelden</div>
        <Button
          label="Login"
          class="bx-btn w-full"
          raised
          @click="goTo('bexio')"
        >
          <div class="flex align-items-center gap-2 px-1">
            <img
              align="start"
              alt="bexio icon"
              :src="bxIcon"
              style="width: 25px; height: 25px"
            />
            <span class="text-base">Login</span>
          </div>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { bxIcon } from "../../assets/base64/index";

const { t } = useI18n(); // use as global scope
const router = useRouter();

const goTo = (routeName) => {
  router.push(routeName);
};
</script>

<style scoped>
.bx-btn {
  color: rgb(34, 43, 13);
  background-color: rgb(157, 196, 60);
}
</style>
