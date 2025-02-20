<template>
  <div class="relative z-10 flex gap-3">
    <div v-if="cardViews" :class="['catalog-card__views', type]">
      <Icon
        :name="icon"
        :class="{
          'text-base text-[rgba(255,255,2555,0.5)]': type !== 'text' && type !== 'chat',
          'text-xl text-[rgba(0,0,0,0.5)]': type === 'text' || type === 'chat',
        }"
      />
      {{ cardViews }}
    </div>

    <div class="mb-[10px] ml-auto mr-[6px]">
      <Btn
        color="link"
        size="link"
        is-icon-only
        :icon="isInFavorite ? 'icon_fav_fill' : 'icon_fav'"
        icon-class="text-base"
        :classes="[
          'w-6 h-6 lg:w-8 lg:h-8 rounded-lg justify-center',
          {
            'bg-[rgba(0,0,0,0.08)] text-gray-20': type === 'text' || type === 'chat',
            'bg-[rgba(255,255,25,0.20)] text-white': type !== 'text' && type !== 'chat',
          },
        ]"
        @click.prevent="toggleFavorite"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Model } from '@/composables/useCatalog'

import { computed } from 'vue'

import { useStorage } from '@vueuse/core'

const props = defineProps<Model>()

const cardViews = computed(() => format1k(props.counts?.views || props.viewsCount))

const icon = computed(() => {
  if (props.type === 'image') {
    return 'icon_model_image'
  }

  if (props.type === 'music') {
    return 'icon_music'
  }

  return 'comment'
})

const favorites = useStorage('onboardingFavorites', [])

const isInFavorite = computed(() => favorites.value?.includes?.(props.id))

const toggleFavorite = async () => {
  try {
    toggleElementInArray(favorites, props.id)

    isInFavorite.value = !isInFavorite.value
  } catch (error) {
    console.log('error', error)
  }
}
</script>

<style scoped></style>

<style lang="scss">
.catalog-card {
  &__views {
    @apply ml-[10px] flex items-center justify-center gap-1 text-sm tracking-[-0.24px];

    &.image,
    &.music {
      @apply text-white/70;
    }

    &.chat,
    &.text {
      @apply text-black/50;
    }
  }

  &__rating {
    &.image {
      @apply text-black/50;
    }

    &.chat,
    &.text {
      @apply text-black/20;
    }
  }
}
</style>
