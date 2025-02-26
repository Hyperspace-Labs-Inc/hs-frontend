<template>
  <div class="">
    <div class="u26m pl-[19px] text-black-700 lg:pl-[38px]">{{ categoriesMap[selectedType] }}</div>
    <div class="p12r mt-[10px] max-w-[366px] pl-[19px] lg:pl-[38px]">{{ $t('access_wide') }}</div>

    <div
      class="no-scroll ml-[19px] mt-4 flex min-w-0 gap-1 overflow-x-auto overflow-y-hidden lg:ml-[38px] lg:mt-[22px]"
    >
      <Btn
        v-for="type in selectedCategories"
        size="medium"
        color="grey"
        :class="{ '!bg-green': selectedCategory === type.id }"
        @click="selectedCategory = type.id"
      >
        <span class="flex flex-shrink-0 items-center gap-2" :class="{ 'pr-4': type.icon }">
          <img
            v-if="type.icon"
            :src="type.icon"
            alt=""
            class="h-4 object-contain"
            :style="{
              filter:
                selectedCategory === type.id
                  ? 'invert(9%) sepia(100%) saturate(7480%) hue-rotate(263deg) brightness(93%) contrast(120%)'
                  : 'none',
            }"
          />

          <span :class="{ 'text-gradient': selectedCategory === type.id }">{{ type.name }}</span>
        </span>
      </Btn>
    </div>

    <div
      class="no-scroll flex min-w-0 gap-4 overflow-x-auto overflow-y-hidden rounded-b-[20px] py-4 pb-[54px] pl-[19px] lg:py-6 lg:pl-[38px]"
    >
      <CatalogCard v-for="model in catalogByType" :key="model.id" v-bind="model" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { catalogByType, selectedCategory, selectedType, categoriesMap, selectedCategories } =
  useCatalog()
</script>
