<template>
  <div class="container py-[120px]">
    <div class="flex gap-8 px-[96px]">
      <div class="flex flex-1 flex-col gap-11">
        <div class="h2">
          {{ $t('frequently') }}
        </div>
      </div>

      <div class="flex min-w-0 flex-1 flex-col gap-10">
        <FaqItem v-for="(faq, index) in faqs" :key="index" v-bind="faq" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { tm } = useI18n()

const faqs = computed(() => tm('faq'))
</script>
