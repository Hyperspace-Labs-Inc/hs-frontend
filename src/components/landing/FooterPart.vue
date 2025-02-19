<template>
  <div class="container mb-10 mt-[146px]">
    <div class="flex max-lg:flex-col max-lg:gap-10">
      <div class="flex-1">
        <div class="f14 text-black-700 uppercase">{{ $t('about') }}</div>

        <ul class="mt-5 flex flex-col gap-2">
          <li v-for="link in links1">
            <NuxtLink
              :to="link.to"
              class="hover:border-black-700 text-black-700 border-b border-transparent transition-all"
            >
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <div class="f14 text-black-700 uppercase">{{ $t('depend') }}</div>

        <ul class="mt-5 flex flex-col gap-2">
          <li v-for="link in links2">
            <NuxtLink
              :to="link.to"
              class="hover:border-black-700 text-black-700 border-b border-transparent transition-all"
            >
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex-1"></div>
    </div>

    <div
      class="relative mt-[77px] flex min-h-12 items-center gap-10 text-center max-lg:flex-col lg:px-20"
    >
      <div class="flex-grow">{{ copyright }}</div>

      <div class="right-0 top-1/2 lg:absolute lg:-translate-y-1/2">
        <NuxtLink v-if="vk" :to="vk" target="_blank">
          <GIcon name="icon_vk" class="text-[48px]" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const runtimeConfig = useRuntimeConfig()

const copyright = computed(() => runtimeConfig.public.copyright)

const vk = computed(() => runtimeConfig.public.vk)

const links1 = computed(() => {
  return [
    { title: t('resorts'), to: '#' },
    { title: t('contacts'), to: '#' },
    { title: t('sitemap'), to: '#' },
  ]
})

const links2 = computed(() => {
  return [
    { title: t('partners'), to: '#' },
    { title: t('coop'), to: '#' },
    { title: t('policy'), to: '#' },
  ]
})
</script>
