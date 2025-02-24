<template>
  <div class="mt-[112px] bg-black py-[72px] text-white lg:mt-[136px] lg:py-[145px]">
    <div class="container px-6 lg:px-[112px]">
      <div>
        <NuxtLink :to="localeRoute('/')">
          <GIcon name="icon_logo" class="h-[48px] text-white" is-pass-w-h />
        </NuxtLink>
      </div>

      <div class="mt-14 flex max-lg:flex-col max-lg:gap-14">
        <div class="flex flex-1 flex-col gap-2">
          <NuxtLink v-for="([domain], index) in domains" :key="index" :to="domain.to" class="u20b">
            {{ domain.label }}
          </NuxtLink>
        </div>

        <div class="flex flex-1 flex-col gap-2">
          <NuxtLink v-for="(menuItem, index) in menu" :key="index" :to="menuItem.to" class="u20b">
            {{ menuItem.title }}
          </NuxtLink>
        </div>

        <div class="flex flex-1 flex-col gap-9 lg:items-end">
          <NuxtLink :to="`mailto:${email}`" class="u20b">
            {{ email }}
          </NuxtLink>

          <div class="flex gap-8">
            <NuxtLink v-if="facebook" target="_blank" :to="facebook">
              <GIcon name="icon_facebook" class="text-[32px]" />
            </NuxtLink>

            <NuxtLink v-if="tiktok" target="_blank" :to="tiktok">
              <GIcon name="icon_tiktok" class="text-[32px]" />
            </NuxtLink>

            <NuxtLink v-if="instagram" target="_blank" :to="instagram">
              <GIcon name="icon_instagram" class="text-[32px]" />
            </NuxtLink>

            <NuxtLink v-if="blog" target="_blank" :to="blog">
              <GIcon name="icon_blog" class="h-6 w-12" is-pass-w-h />
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="mt-14 flex justify-between max-lg:flex-col-reverse max-lg:gap-10 lg:mt-10">
        <div class="p-s">{{ copyright }}</div>
        <div class="flex gap-6">
          <NuxtLink to="/terms" class="p-s">{{ $t('terms') }}</NuxtLink>
          <NuxtLink to="/policy" class="p-s">{{ $t('privacy') }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderLocale from '~/components/base/HeaderLocale.vue'

const { t } = useI18n()

const localeRoute = useLocaleRoute()

const { copyright, instagram, facebook, blog, email, tiktok } = useRuntimeConfig()?.public || {}

const domains = useState('domains', () => [])

const menu = useState('menu', () => [
  { title: t('ai_tools'), to: '/ai-tools' },
  { title: t('blog'), to: '/blog' },
  { title: t('faqtitle'), to: '/faq' },
  { title: t('contact'), to: '/contact' },
])
</script>
