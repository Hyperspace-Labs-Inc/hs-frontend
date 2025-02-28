<template>
  <div ref="target" class="relative mx-auto w-full max-w-[1440px] pt-[63px]" id="hyper-loop">
    <Transition name="fade" mode="in-out">
      <img
        src="/assets/images/animations/hyperloop.webp"
        alt="Loading animation"
        class="pointer-events-none w-full select-none object-contain"
        :class="{ invisible: animationRef?.isLoaded }"
      />
    </Transition>

    <Transition name="fade" mode="out-in">
      <dotlottie-player
        ref="animationRef"
        class="pointer-events-none absolute left-0 top-0 w-full select-none"
        src="/assets/animations/portal.lottie"
        @load="isLoading = false"
      />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

const isLoading = ref(true)

const animationRef = ref()

const { y } = useWindowScroll()

watch(y, scrollY => {
  if (!animationRef.value) {
    return
  }

  const instance = animationRef.value?.getLottie()

  const scrollPercentage = scrollY / (document.documentElement.scrollHeight - window.innerHeight)

  const { totalFrames } = instance || {}

  const targetFrame = Math.round(scrollPercentage * totalFrames * 4)

  animationRef.value.seek(targetFrame)
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
