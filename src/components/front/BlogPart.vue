<template>
  <div class="mt-12">
    <div class="header-h2">{{ $t('latest') }}</div>

    <div class="relative">
      <div
        class="relative flex gap-6 overflow-x-auto pt-6 max-lg:-mr-4 lg:-mx-3"
        ref="scrollContainerRef"
      >
        <div
          v-for="(blog, index) in blogItems"
          :key="index"
          class="w-[80vw] flex-shrink-0 lg:w-1/4 lg:px-3"
        >
          <BlogItem v-bind="blog" />
        </div>
      </div>

      <button v-if="isShowPrev" style="outline: 0" class="prev-btn" @click="goPrevHandler">
        <GIcon name="icon_left" class="text-base text-black-800" />
      </button>

      <button v-if="isShowNext" style="outline: 0" class="next-btn" @click="goNextHandler">
        <GIcon name="icon_right" class="text-base text-black-800" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { tm } = useI18n()

const blogItems = computed(() => tm('blogItems'))

const scrollContainerRef = ref()

const isShowNext = ref(false)

const isShowPrev = ref(false)

const showButtons = () => {
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.value

  isShowPrev.value = scrollLeft > 0

  isShowNext.value = scrollLeft + clientWidth < scrollWidth - 1
}

const goPrevHandler = () => {
  scrollContainerRef.value?.scrollTo?.({
    left: scrollContainerRef.value.scrollLeft - scrollContainerRef.value.clientWidth,
    top: 0,
    behavior: 'smooth',
  })
}

const goNextHandler = () => {
  scrollContainerRef.value?.scrollTo?.({
    left: scrollContainerRef.value.scrollLeft + scrollContainerRef.value.clientWidth,
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  showButtons()

  // Добавляем слушатель скролла для динамического обновления кнопок
  scrollContainerRef.value.addEventListener('scroll', showButtons)
})
</script>

<style lang="scss" scoped>
.prev-btn,
.next-btn {
  @apply absolute right-[10px] top-1/2 z-[10] flex h-10
  w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black-1100
    shadow-[0_2px_12px_0_rgba(69,31,118,0.23)] ring-1 ring-inset ring-black-1000;
}

.prev-btn {
  @apply left-[10px] right-auto #{!important};
}
</style>
