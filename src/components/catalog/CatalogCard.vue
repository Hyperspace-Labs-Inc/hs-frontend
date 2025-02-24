<template>
  <NuxtLink
    :to="`/ai/${newSlug || slug}`"
    class="catalog-card"
    :class="[type, { premium: cardPremium }]"
  >
    <img v-if="!isChat && cardImage" :src="cardImage" alt="" class="catalog-card--img" />

    <div v-else class="catalog-card--bg" />

    <div class="w-relative z-10 h-[99px] flex-shrink-0 p-[10px] pb-0">
      <img v-if="isChat && cardImage" :src="cardImage" alt="" class="catalog-card--img_chat" />

      <Icon v-else :name="systemType" class="block text-[64px] text-white" />
    </div>

    <img
      v-if="!isChat"
      src="/assets/images/catalog/card_bg.svg"
      alt=""
      class="catalog-card--bgimg"
    />

    <div class="flex-grow"></div>

    <div
      v-if="cardTitle"
      class="catalog-card--title"
      :class="{ '!text-black': !isImage && !isMusic }"
    >
      {{ cardTitle }}
    </div>

    <div
      v-if="!isImage && cardDescription"
      class="catalog-card--desc"
      :class="{ '!text-black': !isImage && !isMusic }"
      v-html="cardDescription"
    />

    <CatalogCardFooter v-bind="props" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Model } from '@/composables/useCatalog'

import CatalogCardFooter from '~/components/catalog/CatalogCardFooter.vue'

const props = defineProps<Model>()

const cardUsage = computed(() => props.usage)

const slug = computed(() => props.slug || '#')

const type = computed(() => props.type || '#')

const cardPremium = computed(() => cardUsage.value === 'premium')

const isImage = computed(() => props.type === 'image')

const isMusic = computed(() => props.type === 'music')

const isChat = computed(() => props.type === 'chat')

const cardDescription = computed(() => props.type !== 'image' && props.description)

const cardTitle = computed(() => props.title)

const cardImage = computed(
  () => props.logo ?? (props.media?.[0]?.thumbnail || props.media?.[0]?.url)
)

const systemType = computed(() => props.systemType || props.system)
</script>

<style lang="scss">
.catalog-card {
  @apply relative flex min-h-[220px] w-[200px] flex-shrink-0 flex-grow-0 cursor-pointer flex-col
  rounded-[20px] bg-black/20 bg-contain bg-bottom
  bg-no-repeat shadow-[0_2px_5px_0_rgba(104,104,104,0.10),0_5px_15px_0_rgba(99,99,99,0.20)]
  transition hover:scale-[103%];

  &--hide {
    @apply absolute bottom-0 left-0 right-0 top-0 z-50 rounded-[20px]
    bg-black/40;
  }

  &.image,
  &.music {
    @apply bg-[rgba(0,0,0,0.8)] #{!important};
  }

  &--img {
    @apply absolute left-0 right-0 top-0 h-[calc(100%-4px)] w-full rounded-[20px] object-cover
    transition;

    &_chat {
      @apply h-14 w-14 rounded-full object-cover object-center;
    }
  }

  &--bgimg {
    @apply absolute bottom-1 left-0 right-0 w-full rounded-[20px] object-contain transition;
  }

  &--bg {
    @apply absolute bottom-1 left-0 right-0 top-0 w-full rounded-[20px]
    bg-black-800 object-contain transition;
  }

  &--title {
    @apply relative z-10 px-[10px] text-base
    font-semibold leading-[21px] tracking-[0.12px] text-white;
  }

  &--desc {
    @apply relative z-10 mt-1 line-clamp-3 px-[10px] text-sm  text-white;
  }

  &:hover {
    @apply bg-black/50;

    .catalog-card--img {
      @apply h-[calc(100%-1px)];
    }

    .catalog-card--bgimg {
      @apply bottom-[1px];
    }

    .catalog-card--bg {
      @apply bottom-[1px] opacity-[93%];
    }
  }
}
</style>
