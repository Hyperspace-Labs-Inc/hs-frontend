<template>
  <div class="container mt-[173px]">
    <div class="header-h1 text-center">
      {{ $t('accomplish') }}
      <span class="bg-gradient-to-b from-purple-600 to-purple bg-clip-text text-transparent">
        {{ $t('any') }}
      </span>
      <br />
      {{ $t('task_with_ai') }}
    </div>

    <div class="p-m mx-auto my-6 max-w-[696px] text-center">{{ $t('hyperspace_an') }}</div>

    <div class="flex justify-center gap-4">
      <Btn size="big" w-fit color="gradient">{{ $t('tryfree') }}</Btn>
      <Btn size="big" w-fit color="ghost">{{ $t('learn_more') }}</Btn>
    </div>

    <div class="mt-14 flex justify-center gap-12">
      <GIcon name="chatgpt" class="text-[32px]" />
      <GIcon name="star" class="text-[32px]" />
      <GIcon name="endless" class="text-[32px]" />
      <GIcon name="snow" class="text-[32px]" />
      <GIcon name="midjourney" class="text-[32px]" />

      <div class="p16e text-center">
        1000+
        <br />
        <span class="p14s">{{ $t('more_models') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
