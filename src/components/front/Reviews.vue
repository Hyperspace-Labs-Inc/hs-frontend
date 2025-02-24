<template>
  <div class="mt-[72px] bg-white py-[72px] lg:mt-[200px]">
    <div class="mx-auto flex max-w-[1086px] justify-between">
      <div class="h2 max-w-[698px] px-6">
        {{ $t('dont') }}
        <span class="text-gradient">{{ $t('users') }}</span>
      </div>

      <div class="flex gap-5 max-lg:hidden">
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

    <div class="mt-12 flex min-w-0 items-start gap-4 overflow-x-auto">
      <ReviewItem v-for="review in reviews" :key="review.id" v-bind="review" />
    </div>

    <div class="mt-6 flex justify-center gap-5 lg:hidden">
      <button
        style="outline: 0"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-black-100"
      >
        <GIcon name="icon_left" />
      </button>
      <button
        style="outline: 0"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-black-100"
      >
        <GIcon name="icon_right" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReviewItem from '~/components/reviews/ReviewItem.vue'

const { reviews } = useReviews()
</script>
