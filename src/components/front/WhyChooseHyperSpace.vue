<template>
  <div ref="target" class="container mt-[136px] lg:mt-[120px]">
    <div class="h2 text-center">
      <div class="text-gradient">{{ $t('why') }}</div>

      <div class="text-black">{{ $t('hyperspace') }}?</div>
    </div>

    <div class="mt-14 flex max-lg:flex-col-reverse max-lg:gap-6 lg:mt-[72px]">
      <div class="flex-1">
        <vue3-lottie
          v-if="targetIsVisible"
          animation-link="/assets/animations/models.json"
          height="100%"
          width="100%"
          :loop="true"
          @on-complete="completeHandler"
          class="pointer-events-none select-none"
        />

        <Btn classes="mt-6 lg:hidden mx-auto" w-fit to="/onboarding">{{ $t('try_our') }}</Btn>
      </div>

      <div class="flex-1 max-lg:text-center lg:p-[96px]">
        <div class="h3" v-html="$t('all_tools')" />

        <div class="p-m mt-4 lg:mt-6" v-html="$t('we_offer')" />

        <Btn classes="mt-10 max-lg:hidden" w-fit to="/onboarding">{{ $t('try_our') }}</Btn>
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
