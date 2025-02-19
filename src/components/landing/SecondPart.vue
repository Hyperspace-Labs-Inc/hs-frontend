<template>
  <div class="container mt-[89px]">
    <div class="flex justify-between gap-6 text-center max-lg:flex-col">
      <div class="flex flex-1 flex-col items-center justify-center gap-6">
        <GIcon name="icon_globe" class="text-[95px]" />

        <div class="f27-700">{{ $t('locations') }}</div>
      </div>
      <div class="flex flex-1 flex-col items-center justify-center gap-6">
        <GIcon name="icon_equipment" class="text-[96px]" />

        <div class="f27-700">{{ $t('assort') }}</div>
      </div>
      <div class="flex flex-1 flex-col items-center justify-center gap-6">
        <GIcon name="icon_delivery" class="text-[96px]" />

        <div class="f27-700">{{ $t('delivery') }}</div>
      </div>
      <div class="flex flex-1 flex-col items-center justify-center gap-6">
        <GIcon name="icon_discount" class="mx-auto text-[96px]" />

        <div class="f27-700">{{ $t('discount50') }}</div>
      </div>
    </div>

    <div class="second-part--book" v-html="$t('book')" />

    <Btn @click="isShowForm = !isShowForm" classes="mx-auto mt-8">{{ $t('request') }}</Btn>
  </div>
</template>

<script setup lang="ts">
const isShowForm = useState('isShowForm', () => false)
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
