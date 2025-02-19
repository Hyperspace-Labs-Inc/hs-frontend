<template>
  <NuxtLink
    :to="localeRoute(`/blog/${link}`)"
    class="flex h-full flex-col rounded-xl ring-1 ring-inset ring-black-100 transition-all duration-500"
  >
    <img :src="image" alt="" class="aspect-square w-full rounded-t-xl object-top" />

    <span class="flex flex-grow flex-col gap-4 p-4">
      <span class="body-semibold">{{ title }}</span>
      <span class="flex-grow" />
      <span class="micro-semibold text-black-800">{{ date }}</span>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
type Props = {
  link: string
  title: string
  date: string
  image: string
}

const props = defineProps<Props>()

const localeRoute = useLocaleRoute()
</script>
