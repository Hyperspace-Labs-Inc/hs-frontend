<template>
  <div ref="target" class="relative mx-auto w-full max-w-[1440px] pt-[63px]" id="hyper-loop">
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
        ref="animationRef"
        v-show="!isLoading"
        animation-link="/assets/animations/portal.json"
        height="100%"
        width="100%"
        :loop="false"
        :auto-play="false"
        @on-animation-loaded="isLoading = false"
        class="width-full pointer-events-none absolute left-0 top-0 select-none"
      />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

import { Vue3Lottie } from 'vue3-lottie'

import { useElementVisibility } from '@vueuse/core'

const target = ref<HTMLElement | null>(null)

const targetIsVisible = useElementVisibility(target)

const isLoading = ref(true)

const animationRef = ref()

const { y } = useWindowScroll()

watch(y, scrollY => {
  if (animationRef.value) {
    const scrollPercentage = scrollY / (document.documentElement.scrollHeight - window.innerHeight)

    animationRef.value.goToAndStop(animationRef.value.getDuration() * 2 * scrollPercentage, true)
  }
})
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
