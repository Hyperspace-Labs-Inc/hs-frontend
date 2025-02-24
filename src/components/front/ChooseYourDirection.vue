<template>
  <div class="container py-[72px] lg:mt-[120px] lg:py-[120px]">
    <div class="flex gap-6 max-lg:flex-col lg:gap-10 lg:px-[96px]">
      <div class="flex-1">
        <div class="h2">
          {{ $t('choose') }}
          <span class="text-gradient">{{ $t('your') }}?</span>
          <br />
          <span class="text-gradient">{{ $t('direction') }}?</span>
        </div>

        <div class="p-s mt-6">{{ $t('hyperspace_offers') }}</div>
      </div>

      <div class="flex min-w-0 flex-1 flex-col gap-2 lg:gap-4">
        <NuxtLink v-for="([domain], index) in domains" :key="index" :to="domain.to">
          <img
            :src="`/assets/images/choose/${domain.label?.toLowerCase?.()}.webp`"
            alt=""
            class="w-full"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const domains = useState('domains', () => [])
</script>
