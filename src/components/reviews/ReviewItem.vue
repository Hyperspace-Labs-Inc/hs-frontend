<template>
  <div
    class="flex w-[90vw] flex-shrink-0 flex-col gap-6 rounded-[32px] bg-black-100 p-8 lg:w-[400px]"
  >
    <div class="flex gap-4">
      <img
        v-if="icon"
        :src="icon"
        alt=""
        class="h-14 w-14 flex-shrink-0 rounded-full object-cover"
      />
      <div>
        <div class="u18b">{{ name }}</div>
        <div class="r18s text-purple">{{ title }}</div>
      </div>
    </div>

    <div class="p-m">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Review } from '@/composables/useReviews'

const props = defineProps<Review>()
</script>
