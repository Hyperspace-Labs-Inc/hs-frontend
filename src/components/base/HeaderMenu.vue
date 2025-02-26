<template>
  <div
    class="relative flex flex-grow items-center justify-center gap-10 max-lg:flex-col max-lg:items-start max-lg:rounded max-lg:shadow-xl"
  >
    <HeaderDomain />

    <ClientOnly>
      <NuxtLink target="_blank" :to="url" class="t18m">ccc {{ $t('mobile_app') }}</NuxtLink>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import HeaderDomain from '~/components/base/HeaderDomain.vue'

const { store, google } = useRuntimeConfig()?.public || {}

const isAndroid = computed(() => /android/i.test(navigator?.userAgent))

const url = computed(() => (isAndroid.value ? google : store))
</script>
