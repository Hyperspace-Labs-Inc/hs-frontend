<template>
  <UDropdown
    v-model:open="isShowMenu"
    :items="domains"
    mode="click"
    :ui="{
      base: 'py-4',
      rounded: 'rounded-3xl',
      padding: 'p-0',
      divide: 'divide-y divide-black-100 dark:divide-black-100',
      item: {
        base: 'font-rounded group flex items-center gap-1.5 w-full',
        rounded: 'rounded-lg',
        padding: 'px-6 py-2',
        size: 'text-lg',
        active: 'bg-gray-100 dark:bg-gray-900 text-black dark:text-black',
        inactive: 'text-black dark:text-black',
        disabled: 'cursor-not-allowed opacity-50',
        icon: {
          base: 'flex-shrink-0 w-5 h-5',
          active: 'text-gray-500 dark:text-gray-400',
          inactive: 'text-gray-400 dark:text-gray-500',
        },
        avatar: {
          base: 'flex-shrink-0',
          size: '2xs',
        },
        label: 'truncate',
        shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto',
      },
    }"
  >
    <UButton
      size="lg"
      variant="ghost"
      color="gray"
      class="shadow-none transition-all"
      :label="domain"
      trailing
      :trailing-icon="
        isShowMenu ? 'i-heroicons-chevron-up-20-solid' : 'i-heroicons-chevron-down-20-solid'
      "
      :ui="{
        base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0',
        size: {
          lg: 'text-lg font-medium',
        },
        gap: {
          lg: 'gap-x-2',
        },
        color: {
          gray: {
            ghost:
              'px-2 !text-black-900 transition-all bg-transparent ring-0 hover:ring-0 focus-visible:ring-0',
          },
        },
        icon: {
          base: 'flex-shrink-0 transition-all',
          loading: 'animate-spin',
          size: {
            lg: 'h-5 w-5',
          },
        },
      }"
    />
  </UDropdown>
</template>

<script setup lang="ts">
const { t } = useI18n()

const domain = ref(t('domains'))

const isShowMenu = ref(false)

const domains = [
  [
    {
      label: t('images'),
      click: () => {
        navigateTo('/ai-image-generator')
      },
    },
  ],
  [
    {
      label: t('chatbots'),
      click: () => {
        navigateTo('/chatbots-ai')
      },
    },
  ],
  [
    {
      label: t('text'),
      click: () => {
        navigateTo('/chatbots-ai')
      },
    },
  ],
  [
    {
      label: t('music'),
      click: () => {
        navigateTo('/chatbots-ai')
      },
    },
  ],
  [
    {
      label: t('voices'),
      click: () => {
        navigateTo('/chatbots-ai')
      },
    },
  ],
]
</script>
