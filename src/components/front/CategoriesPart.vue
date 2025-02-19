<template>
  <div class="categories-part">
    <button
      v-for="(cat, index) in categories"
      :key="index"
      style="outline: 0"
      class="categories-part--btn"
      :class="{ active: Object.keys(cat)[0] === category }"
      @click="setCategoryHandler(cat)"
    >
      <GIcon
        v-if="Object.keys(cat)?.length"
        :name="`icon_${Object.keys(cat)[0]}`"
        class="text-[38px]"
      />

      <span class="text-sm">
        {{ Object.values(cat)[0] }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
const { tm } = useI18n()

const categories = computed(() => tm('categoriesItems'))

const category = useState('category', () => '')

const setCategoryHandler = cat => {
  category.value = category.value === Object.keys(cat)?.[0] ? '' : Object.keys(cat)?.[0]
}
</script>

<style lang="scss" scoped>
.categories-part {
  @apply flex gap-4 overflow-x-auto lg:justify-center py-8;

  &--btn {
    @apply flex h-[100px] w-[100px] flex-shrink-0 select-none flex-col items-center justify-center gap-1.5 
    rounded-lg p-1.5 shadow-[0_0_10px_0_rgba(0,0,0,0.05)] transition hover:shadow-[0_0_10px_0_rgba(0,0,0,0.2)];

    &.active {
      @apply shadow-[0_0_10px_0_rgba(0,0,0,0.2)];
    }
  }
}
</style>
