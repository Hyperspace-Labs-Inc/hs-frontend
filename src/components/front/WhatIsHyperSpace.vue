<template>
  <div class="container py-20 lg:py-[120px]">
    <div class="flex gap-8 max-lg:flex-col lg:gap-[88px]">
      <div class="w-full max-w-[512px]">
        <div class="h2 max-lg:text-center">
          {{ $t('what_is') }}
          <br />
          <span class="text-gradient">{{ $t('hyperspace') }}?</span>
        </div>

        <div class="p-s mt-6 lg:mt-10">{{ $t('hyperspace_is') }}</div>

        <div class="p-s mt-6">{{ $t('with_hyperspace') }}</div>

        <div class="mt-8 flex items-center gap-4 max-lg:flex-col">
          <div class="p16m max-lg:text-center">{{ $t('trusted') }}:</div>

          <div class="flex">
            <img
              src="/assets/images/trusted/01.webp"
              alt=""
              class="relative block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />
            <img
              src="/assets/images/trusted/02.webp"
              alt=""
              class="relative -ml-4 block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />
            <img
              src="/assets/images/trusted/03.webp"
              alt=""
              class="relative -ml-4 block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />
            <img
              src="/assets/images/trusted/04.webp"
              alt=""
              class="relative -ml-4 block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />
            <img
              src="/assets/images/trusted/05.webp"
              alt=""
              class="relative -ml-4 block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />

            <div
              class="u10b relative -ml-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple to-purple-600 text-white"
            >
              +120k
            </div>
          </div>
        </div>

        <Btn w-fit classes="mt-10 max-lg:mx-auto lg:mt-8" to="https://hyperspace.ai/onboarding">
          {{ $t('join_hyperspace') }}
        </Btn>
      </div>

      <ClientOnly>
        <div
          ref="scrollContainerRef"
          class="no-scroll flex min-w-0 gap-4 overflow-x-auto overflow-y-hidden"
        >
          <img v-for="image in selectedImages" :key="image" :src="image" class="w-full" alt="" />
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize, useScroll, useIntervalFn, useTimeoutFn } from '@vueuse/core'

const { width } = useWindowSize()

const images = [
  '/assets/images/catalog/images.webp',
  '/assets/images/catalog/chatbots.webp',
  '/assets/images/catalog/texts.webp',
  '/assets/images/catalog/music.webp',
  '/assets/images/catalog/voices.webp',
]

const imagesMobile = [
  '/assets/images/catalog/images_mobile.webp',
  '/assets/images/catalog/chatbots_mobile.webp',
  '/assets/images/catalog/texts_mobile.webp',
  '/assets/images/catalog/music_mobile.webp',
  '/assets/images/catalog/voices_mobile.webp',
]

const selectedImages = computed(() => (width.value < 768 ? imagesMobile : images))

const scrollContainerRef = ref<HTMLElement | null>(null)

const { x } = useScroll(scrollContainerRef, { behavior: 'smooth' })
let currentIndex = 0
let isUserScrolling = false
let lastScrollX = 0

const scrollToIndex = (index: number) => {
  const container = scrollContainerRef.value
  if (!container) return

  const images = Array.from(container.querySelectorAll('img'))
  const targetImage = images[index]
  if (targetImage) {
    x.value = targetImage.offsetLeft - container.offsetLeft
  }
}

// Автоскролл каждые 2 секунды
const { pause, resume } = useIntervalFn(() => {
  if (!isUserScrolling) {
    currentIndex = (currentIndex + 1) % selectedImages.value.length
    scrollToIndex(currentIndex)
  }
}, 2000)

// Таймер для фиксации остановки скролла
const { start: startScrollTimeout } = useTimeoutFn(() => {
  isUserScrolling = false
  // Определяем ближайший слайд
  const container = scrollContainerRef.value
  if (!container) return

  const images = Array.from(container.querySelectorAll('img'))
  let closestIndex = 0
  let minDistance = Infinity

  images.forEach((img, index) => {
    const distance = Math.abs(img.offsetLeft - container.offsetLeft - x.value)
    if (distance < minDistance) {
      minDistance = distance
      closestIndex = index
    }
  })

  currentIndex = closestIndex
  scrollToIndex(currentIndex)
  resume()
}, 300)

// Обработчик скролла
watch(x, newX => {
  if (Math.abs(newX - lastScrollX) > 5) {
    isUserScrolling = true
    pause()
    startScrollTimeout()
  }
  lastScrollX = newX
})

onMounted(resume)

onUnmounted(pause)
</script>
