<template>
  <div ref="target" class="container mt-[136px] lg:mt-[120px]">
    <div class="h2 text-center">
      <div class="text-gradient">{{ $t('why') }}</div>
      {{ isLoaded }}-isLoaded
      <div class="text-black">{{ $t('hyperspace') }}?</div>
    </div>

    <div class="mt-14 flex gap-8 max-lg:flex-col-reverse max-lg:gap-6 lg:mt-[72px]">
      <div class="relative flex-1">
        <Transition name="fade" mode="in-out">
          <img
            src="/assets/images/animations/models.webp"
            alt="Loading animation"
            class="pointer-events-none w-full select-none object-contain"
            :class="{ '!invisible': isLoaded }"
          />
        </Transition>

        <ClientOnly>
          <Transition name="fade" mode="in-out">
            <dotlottie-player
              v-show="isLoaded"
              ref="animationRef"
              key="why"
              class="pointer-events-none absolute left-0 top-0 w-full select-none"
              src="/assets/animations/models.json"
            />
          </Transition>
        </ClientOnly>

        <Btn classes="mt-6 lg:hidden mx-auto" w-fit to="https://hyperspace.ai/onboarding">
          {{ $t('try_our') }}
        </Btn>
      </div>

      <div class="flex-1">
        <div class="max-lg:text-center lg:p-[96px]">
          <div class="h3" v-html="$t('all_tools')" />

          <div class="p-m mt-4 lg:mt-6" v-html="$t('we_offer')" />

          <Btn classes="mt-10 max-lg:hidden" w-fit to="https://hyperspace.ai/onboarding">
            {{ $t('try_our') }}
          </Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

const isLoaded = ref(false)

const animationRef = ref()

const { y } = useWindowScroll()

watch(
  () => animationRef.value,
  init => {
    if (!init) {
      return
    }

    animationRef.value?.addEventListener?.('rendered', () => {
      isLoaded.value = true
    })
  }
)

watch(y, scrollY => {
  if (!animationRef.value) {
    return
  }

  const instance = animationRef.value?.getLottie()

  const scrollPercentage = scrollY / (document.documentElement.scrollHeight - window.innerHeight)

  const { totalFrames } = instance || {}

  const targetFrame = Math.round(scrollPercentage * totalFrames * 2)

  requestAnimationFrame(() => {
    animationRef.value.seek(targetFrame)
  })
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
