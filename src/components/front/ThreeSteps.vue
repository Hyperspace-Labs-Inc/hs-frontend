<template>
  <div class="container py-[120px] text-center">
    <div class="h2">
      {{ $t('three') }}
      <span class="text-gradient">{{ $t('solve') }}</span>
      <br />
      <span class="text-gradient">{{ $t('everything') }}</span>
    </div>

    <div class="mt-[96px] flex gap-10">
      <div class="flex flex-1 flex-col gap-6">
        <img src="/assets/images/steps/step1.webp" alt="" class="mx-auto w-full max-w-[320px]" />
        <div class="h5">1. {{ $t('imagine') }}</div>
        <div class="p-m">{{ $t('whether') }}</div>
      </div>
      <div class="flex flex-1 flex-col gap-6">
        <img src="/assets/images/steps/step2.webp" alt="" class="mx-auto w-full max-w-[320px]" />
        <div class="h5">2. {{ $t('send') }}</div>
        <div class="p-m">{{ $t('select') }}</div>
      </div>
      <div class="flex flex-1 flex-col gap-6">
        <img src="/assets/images/steps/step3.webp" alt="" class="mx-auto w-full max-w-[320px]" />
        <div class="h5">3. {{ $t('enjoy') }}</div>
        <div class="p-m">{{ $t('interact') }}</div>
      </div>
    </div>

    <Btn classes="mx-auto min-w-[255px] mt-12" w-fit>{{ $t('try_it_now') }}</Btn>
  </div>
</template>
<script setup lang="ts"></script>
