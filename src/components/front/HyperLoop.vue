<template>
  <div ref="target" class="relative pt-[63px]" id="hyper-loop">
    <Transition name="fade" mode="in-out">
      <img
        src="/assets/images/animations/hyperloop.webp"
        alt="Loading animation"
        class="pointer-events-none w-full select-none object-contain"
        :class="{ '!invisible': !isLoading }"
      />
    </Transition>

    <Transition name="fade" mode="out-in">
      <vue3-lottie
        v-show="!isLoading"
        animation-link="/assets/animations/portal.json"
        height="100%"
        width="100%"
        :loop="true"
        @on-animation-loaded="isLoading = false"
        class="width-full pointer-events-none absolute left-0 top-0 select-none"
      />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { Vue3Lottie } from 'vue3-lottie'

import { useElementVisibility } from '@vueuse/core'

const target = ref<HTMLElement | null>(null)

const targetIsVisible = useElementVisibility(target)

const isLoading = ref(true)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0.5;
}
</style>
