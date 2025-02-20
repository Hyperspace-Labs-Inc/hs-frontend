<template>
  <div class="mt-12">
    <div class="container my-8 flex max-lg:flex-col max-lg:gap-5">
      <div v-if="rentalsItems.length" class="flex-1">
        <div class="body-semibold">{{ $t('rentals') }}</div>

        <ul class="mt-3 flex flex-col gap-2">
          <li v-for="(rental, index) in rentalsItems" :key="index">
            <NuxtLink :to="rental.url" class="body-small-regular text-black-800">
              {{ rental.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div v-if="sitemapItems.length" class="flex-1">
        <div class="body-semibold">{{ $t('site_map') }}</div>

        <ul class="mt-3 flex flex-col gap-2">
          <li v-for="(site, index) in sitemapItems" :key="index">
            <NuxtLink :to="site.url" class="body-small-regular text-black-800">
              {{ site.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div v-if="contactsItems.length" class="flex-1">
        <div class="body-semibold">{{ $t('contacts') }}</div>

        <div class="body-small-regular mt-3 flex gap-3 text-black-800">
          <div class="flex flex-col gap-3 lg:w-1/3 lg:flex-shrink-0">
            <div v-for="(contact, index) in contactsItems" :key="index">
              {{ contact.title }}:
              <div class="lg:hidden">{{ contact.value }}</div>
            </div>
          </div>
          <div class="flex flex-col gap-3 max-lg:hidden">
            <div v-for="(contact, index) in contactsItems" :key="index">
              {{ contact.value }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <Divider class="my-8" />

    <div class="container flex pb-16 max-lg:flex-col max-lg:gap-6">
      <div class="p12 flex-1 text-black-800">{{ copyright }}</div>

      <div class="flex-1">
        <HeaderLocale />
      </div>

      <div class="flex flex-1 items-center gap-4">
        <NuxtLink v-if="facebook" target="_blank" :to="facebook">
          <GIcon name="icon_facebook" class="text-2xl" />
        </NuxtLink>

        <NuxtLink v-if="instagram" target="_blank" :to="instagram">
          <GIcon name="icon_instagram" class="text-2xl" />
        </NuxtLink>

        <NuxtLink v-if="blog" target="_blank" :to="blog">
          <GIcon name="icon_blog" class="h-6 w-12" is-pass-w-h />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderLocale from '~/components/base/HeaderLocale.vue'

const { tm } = useI18n()

const popularItems = computed(() => tm('popularItems'))

const rentalsItems = computed(() => tm('rentalsItems'))

const sitemapItems = computed(() => tm('sitemapItems'))

const contactsItems = computed(() => tm('contactsItems'))

const { copyright, instagram, facebook, blog } = useRuntimeConfig()?.public || {}
</script>
