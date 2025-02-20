<template>
  <div ref="target" class="container mt-[96px]">
    <div class="flex">
      <div class="flex-1">
        <vue3-lottie
          v-if="targetIsVisible"
          animation-link="/assets/animations/graph.json"
          height="100%"
          width="100%"
          :loop="true"
          renderer="canvas"
          @on-complete="completeHandler"
          class="pointer-events-none select-none"
        />
      </div>
      <div class="flex-1 p-[96px]">
        <div class="h3" v-html="$t('enhance')" />

        <div class="p-m mt-10" v-html="$t('with_ai')" />

        <Btn classes="mt-10" w-fit>{{ $t('boost') }}</Btn>
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
