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
          @click="goPrevHandler"
        >
          <GIcon name="icon_left" />
        </button>
        <button
          style="outline: 0"
          class="flex h-14 w-14 items-center justify-center rounded-full bg-black-100"
          @click="goNextHandler"
        >
          <GIcon name="icon_right" />
        </button>
      </div>
    </div>

    <div
      ref="scrollContainerRef"
      class="no-scroll mt-12 flex min-w-0 items-start gap-4 overflow-x-auto"
    >
      <ReviewItem v-for="review in reviews" :key="review.id" v-bind="review" />
    </div>

    <div class="mt-6 flex justify-center gap-5 lg:hidden">
      <button
        v-if="isShowPrev && isSlider"
        style="outline: 0"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-black-100"
      >
        <GIcon name="icon_left" />
      </button>

      <button
        v-if="isShowNext && isSlider"
        style="outline: 0"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-black-100"
      >
        <GIcon name="icon_right" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScroll, useThrottleFn } from '@vueuse/core'

import ReviewItem from '~/components/reviews/ReviewItem.vue'

const scrollContainerRef = ref<HTMLElement | null>(null)

const { reviews } = useReviews()

const isShowNext = ref(false)

const isSlider = computed(() => reviews.value?.length > 1)

const isShowPrev = ref(false)

const { x: scrollLeft, isScrolling } = useScroll(scrollContainerRef, { behavior: 'smooth' })

// Функция для обновления состояния кнопок с throttling
const updateButtons = useThrottleFn(() => {
  if (!scrollContainerRef.value) return

  const { scrollWidth, clientWidth } = scrollContainerRef.value

  isShowPrev.value = scrollLeft.value > 0
  isShowNext.value = scrollLeft.value + clientWidth < scrollWidth - 1
}, 200)

watch(scrollLeft, updateButtons)

const goPrevHandler = () => {
  if (!scrollContainerRef.value) return
  scrollContainerRef.value.scrollBy({
    left: -scrollContainerRef.value.clientWidth,
    behavior: 'smooth',
  })
}

const goNextHandler = () => {
  if (!scrollContainerRef.value) return
  scrollContainerRef.value.scrollBy({
    left: scrollContainerRef.value.clientWidth,
    behavior: 'smooth',
  })
}

onMounted(updateButtons)
</script>
