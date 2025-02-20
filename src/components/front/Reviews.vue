<template>
  <div class="mt-[200px] bg-white pt-[144px]">
    <div class="mx-auto flex max-w-[1086px] justify-between">
      <div class="h2 max-w-[698px]">
        {{ $t('dont') }}
        <span class="text-gradient">{{ $t('users') }}</span>
      </div>

      <div class="flex gap-5">
        <button
          style="outline: 0"
          class="flex h-14 w-14 items-center justify-center rounded-full bg-black-100"
        >
          <GIcon name="icon_left" />
        </button>
        <button
          style="outline: 0"
          class="flex h-14 w-14 items-center justify-center rounded-full bg-black-100"
        >
          <GIcon name="icon_right" />
        </button>
      </div>
    </div>

    <div class="flex mt-12 min-w-0 items-start gap-4 overflow-x-auto">
      <ReviewItem v-for="review in reviews" :key="review.id" v-bind="review" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ReviewItem from '~/components/reviews/ReviewItem.vue'

const { reviews } = useReviews()
</script>
