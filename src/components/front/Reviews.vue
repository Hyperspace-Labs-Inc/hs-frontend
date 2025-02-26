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
          class="flex h-14 w-14 items-center justify-center rounded-full bg-black-100 transition-all hover:bg-green"
          @click="goPrevHandler"
        >
          <GIcon name="icon_left" />
        </button>
        <button
          style="outline: 0"
          class="flex h-14 w-14 items-center justify-center rounded-full bg-black-100 transition-all hover:bg-green"
          @click="goNextHandler"
        >
          <GIcon name="icon_right" />
        </button>
      </div>
    </div>

    <div
      ref="scrollContainerRef"
      class="no-scroll mt-12 flex min-w-0 items-start gap-4 overflow-x-auto"
      @mouseenter="stopAutoScroll"
      @mouseleave="startAutoScroll"
      @touchstart="stopAutoScroll"
      @touchend="startAutoScroll"
    >
      <ReviewItem v-for="review in reviews" :key="review.id" v-bind="review" />
    </div>

    <div class="mt-6 flex justify-center gap-5 lg:hidden">
      <button
        v-if="isSlider"
        style="outline: 0"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-black-100"
        @click="goPrevHandler"
      >
        <GIcon name="icon_left" />
      </button>

      <button
        v-if="isSlider"
        style="outline: 0"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-black-100"
        @click="goNextHandler"
      >
        <GIcon name="icon_right" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

import ReviewItem from '~/components/reviews/ReviewItem.vue'

const scrollContainerRef = ref<HTMLElement | null>(null)

const { reviews } = useReviews()

const isSlider = computed(() => reviews.value?.length > 1)

// Бесконечная автопрокрутка
let autoScroll: number | null = null

let interactionTimeout: number | null = null

const startAutoScroll = () => {
  stopAutoScroll() // Удаляем старый интервал, если был
  autoScroll = window.requestAnimationFrame(scrollStep)
}

const stopAutoScroll = () => {
  if (autoScroll) {
    window.cancelAnimationFrame(autoScroll)
    autoScroll = null
  }
  if (interactionTimeout) {
    clearTimeout(interactionTimeout)
    interactionTimeout = null
  }
}

// Перезапуск автоскролла через 4 сек после взаимодействия
const resetAutoScroll = () => {
  stopAutoScroll()
  interactionTimeout = setTimeout(startAutoScroll, 4000)
}

// Шаг прокрутки (бесконечно)
const scrollStep = () => {
  if (!scrollContainerRef.value) return

  scrollContainerRef.value.scrollLeft += 1 // Скорость скролла

  // Если дошли до конца первой копии, переносим обратно к началу
  if (scrollContainerRef.value.scrollLeft >= scrollContainerRef.value.scrollWidth / 2) {
    scrollContainerRef.value.scrollLeft = 0
  }

  if (autoScroll) {
    autoScroll = window.requestAnimationFrame(scrollStep)
  }
}

// Ручное перелистывание (с остановкой автоскролла)
const goPrevHandler = () => {
  if (!scrollContainerRef.value) return
  stopAutoScroll()
  scrollContainerRef.value.scrollBy({
    left: -scrollContainerRef.value.clientWidth,
    behavior: 'smooth',
  })
  resetAutoScroll()
}

const goNextHandler = () => {
  if (!scrollContainerRef.value) return
  stopAutoScroll()
  scrollContainerRef.value.scrollBy({
    left: scrollContainerRef.value.clientWidth,
    behavior: 'smooth',
  })
  resetAutoScroll()
}

// Запускаем автопрокрутку при загрузке
onMounted(startAutoScroll)

// Останавливаем при размонтировании
onUnmounted(stopAutoScroll)
</script>

<style scoped>
.no-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.no-scroll::-webkit-scrollbar {
  display: none;
}
</style>
