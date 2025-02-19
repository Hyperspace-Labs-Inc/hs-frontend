<template>
  <div class="container mt-20">
    <div class="f36-600 text-center text-black-100">
      {{ $t('spec') }}
    </div>

    <div class="f16-500 mt-[60px] grid max-w-full grid-cols-1 gap-5 overflow-x-auto lg:grid-cols-2">
      <div
        v-for="(offer, index) in offers"
        :key="index"
        class="flex gap-6 rounded-lg py-[26px] pr-4 max-lg:flex-col lg:items-center"
        :style="`background:${offer.color}`"
      >
        <div class="flex-shrink-0">
          <img :src="offer.image" alt="" />

          <div class="font-bebas f25-700 mt-5 text-center uppercase text-white">
            {{ offer.offer }}
          </div>
        </div>

        <div class="flex h-full flex-col gap-2 max-lg:pl-4 max-lg:text-center">
          <div class="font-bebas f40-800-i uppercase">
            <span class="text-white">{{ offer.title1 }}</span>
            {{ offer.title2 }}
          </div>

          <div class="fourth-part--text" v-html="offer.text" />

          <div
            class="f33-700 mt-auto w-fit rounded-3xl bg-white/25 px-[22px] py-[10px] uppercase ring-1 ring-white/30 max-lg:mx-auto"
          >
            {{ offer.coupon }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { tm } = useI18n()

const offers = computed(() => tm('offers'))
</script>

<style lang="scss" scoped>
.fourth-part {
  &--text {
    @apply text-[25px] font-normal leading-7;

    &::v-deep(span) {
      @apply text-white;
    }
  }
}
</style>
