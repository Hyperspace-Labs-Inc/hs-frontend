<template>
  <div class="container mt-[120px] py-[120px]">
    <div class="flex gap-10 px-[96px]">
      <div class="flex-1">
        <div class="h2">
          {{ $t('choose') }}
          <span class="text-gradient">{{ $t('your') }}?</span>
          <br />
          <span class="text-gradient">{{ $t('direction') }}?</span>
        </div>

        <div class="p-s mt-6">{{ $t('hyperspace_offers') }}</div>
      </div>

      <div class="flex min-w-0 flex-1 flex-col gap-4">
        <NuxtLink><img src="/assets/images/choose/images.webp" alt="" class="w-full" /></NuxtLink>
        <NuxtLink><img src="/assets/images/choose/chatbots.webp" alt="" class="w-full" /></NuxtLink>
        <NuxtLink><img src="/assets/images/choose/texts.webp" alt="" class="w-full" /></NuxtLink>
        <NuxtLink><img src="/assets/images/choose/music.webp" alt="" class="w-full" /></NuxtLink>
        <NuxtLink><img src="/assets/images/choose/voices.webp" alt="" class="w-full" /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatalogPreview from '~/components/catalog/CatalogPreview.vue'
</script>
