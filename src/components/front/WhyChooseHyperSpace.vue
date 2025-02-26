<template>
  <div ref="target" class="container mt-[136px] lg:mt-[120px]">
    <div class="h2 text-center">
      <div class="text-gradient">{{ $t('why') }}</div>

      <div class="text-black">{{ $t('hyperspace') }}?</div>
    </div>

    <div class="mt-14 flex max-lg:flex-col-reverse max-lg:gap-6 lg:mt-[72px]">
      <div class="relative flex-1">
        <Transition name="fade" mode="in-out">
          <img
            src="/assets/images/animations/models.webp"
            alt="Loading animation"
            class="pointer-events-none w-full select-none object-contain"
            :class="{ '!invisible': !isLoading }"
          />
        </Transition>

        <Transition name="fade" mode="in-out">
          <vue3-lottie
            v-show="!isLoading"
            animation-link="/assets/animations/models.json"
            height="100%"
            width="100%"
            :loop="true"
            @on-animation-loaded="isLoading = false"
            class="width-full pointer-events-none absolute left-0 top-0 select-none"
          />
        </Transition>
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
