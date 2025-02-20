<template>
  <div class="container pb-[120px]">
    <div class="flex items-center gap-8 px-[96px]">
      <div class="flex flex-1 flex-col gap-11">
        <div class="h2">
          {{ $t('hyperspace_in_your') }}
          <span class="text-gradient">{{ $t('pocket') }}!</span>
        </div>

        <div class="flex gap-8">
          <GIcon name="qr" class="flex-shrink-0 text-[108px]" />

          <div class="flex flex-col gap-4">
            <NuxtLink>
              <img src="/images/apple.webp" class="w-[135px]" alt="" />
            </NuxtLink>
            <NuxtLink>
              <img src="/images/google.webp" class="w-[152px]" alt="" />
            </NuxtLink>
          </div>
        </div>

        <div class="p-m">{{ $t('continue') }}</div>

        <Btn color="ghost" w-fit>{{ $t('learn_more') }}</Btn>
      </div>

      <div class="flex min-w-0 flex-1 flex-col gap-4">
        <img src="/images/pocket.webp" alt="" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatalogPreview from '~/components/catalog/CatalogPreview.vue'
</script>
