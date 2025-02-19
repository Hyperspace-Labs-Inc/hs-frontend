<template>
  <div class="container mt-20">
    <div class="f36-500 mx-auto max-w-[980px] text-center">
      {{ $t('rent') }}
    </div>

    <div class="mt-[38px] flex max-w-full gap-[25px] overflow-x-auto">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="min-w-[80vw] flex-1 p-[25px] lg:min-w-[30%]"
        :class="{ 'bg-blue/5': index % 2 != 0 }"
      >
        <div class="f15-700 text-center uppercase" v-html="service.title" />

        <div class="f16-500 mt-[42px] !leading-[26.5px] text-black-600" v-html="service.text" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { tm } = useI18n()

const services = computed(() => tm('services'))
</script>
