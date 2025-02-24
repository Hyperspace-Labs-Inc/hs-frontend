<template>
  <div ref="target" class="container mt-[96px]">
    <div class="flex max-lg:flex-col-reverse max-lg:gap-8">
      <div class="flex-1">
        <vue3-lottie
          v-if="targetIsVisible"
          animation-link="/assets/animations/graph.json"
          height="100%"
          width="100%"
          :loop="true"
          @on-complete="completeHandler"
          class="pointer-events-none select-none"
        />

        <Btn classes="mt-10 mx-auto lg:hidden" to="https://hyperspace.ai/onboarding" w-fit>{{ $t('boost') }}</Btn>
      </div>

      <div class="flex-1 max-lg:text-center lg:p-[96px]">
        <div class="h3" v-html="$t('enhance')" />

        <div class="p-m mt-4 lg:mt-10" v-html="$t('with_ai')" />

        <Btn classes="mt-10 max-lg:hidden" to="https://hyperspace.ai/onboarding" w-fit>{{ $t('boost') }}</Btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'

import { useElementVisibility } from '@vueuse/core'

const target = useTemplateRef<HTMLDivElement>('target')

const targetIsVisible = useElementVisibility(target)

const completeHandler = () => {}
</script>
