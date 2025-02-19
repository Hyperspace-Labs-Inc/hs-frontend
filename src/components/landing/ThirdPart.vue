<template>
  <div class="container mt-20">
    <div class="f26-700 text-center">
      {{ $t('rating') }}
      <span class="text-blue">{{ $t('feefo') }}</span>
    </div>

    <div class="f26 mx-auto mt-8 max-w-[650px] text-center">{{ $t('service_rating') }}</div>

    <div class="f16-500 mt-[60px] flex max-w-full gap-5 overflow-x-auto">
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="flex min-w-[80vw] flex-col gap-5 lg:min-w-[20%]"
      >
        <div v-html="review.review" />
        <div class="mt-auto text-black-300/50" v-html="review.name" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const isShowForm = useState('isShowForm', () => false)

const { tm } = useI18n()

const reviews = computed(() => tm('reviews'))
</script>

<style lang="scss" scoped>
.second-part {
  &--book {
    @apply mt-[46px] text-center text-[26px] font-medium;

    &::v-deep(span) {
      @apply font-bold text-blue;
    }
  }
}
</style>
