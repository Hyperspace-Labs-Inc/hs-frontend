<template>
  <div ref="target" class="container mt-[120px]">
    <div class="h2 text-center text-purple">
      {{ $t('why') }}
      <div class="text-black">{{ $t('hyperspace') }}?</div>
    </div>

    <div class="mt-[72px] flex">
      <div class="flex-1">
        <vue3-lottie
          v-if="targetIsVisible"
          animation-link="/assets/animations/models.json"
          height="100%"
          width="100%"
          :loop="true"
          renderer="canvas"
          @on-complete="completeHandler"
          class="pointer-events-none select-none"
        />
      </div>
      <div class="flex-1 p-[96px]">
        <div class="h3" v-html="$t('all_tools')" />

        <div class="p-m mt-6" v-html="$t('we_offer')" />

        <Btn classes="mt-10" w-fit>{{ $t('try_our') }}</Btn>
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
