<template>
  <div ref="target" class="pt-[63px]" id="hyper-loop">
    <vue3-lottie
      v-if="targetIsVisible"
      animation-link="/assets/animations/portal.json"
      height="100%"
      width="100%"
      :loop="true"
      @on-complete="completeHandler"
      class="pointer-events-none select-none"
    />
  </div>
</template>

<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'

import { useElementVisibility } from '@vueuse/core'

const completeHandler = () => {}

const target = useTemplateRef<HTMLDivElement>('target')

const targetIsVisible = useElementVisibility(target)
</script>
