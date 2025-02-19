<template>
  <div
    class="fixed left-0 right-0 top-0 z-50 flex items-center gap-4 bg-white px-5 py-2 transition-[padding] max-lg:justify-center lg:px-20 lg:py-8"
    :class="{ 'lg:!py-2': isStickied }"
  >
    <NuxtLink :to="localeRoute('/')">
      <GIcon
        name="icon_logo"
        class="h-5 transition-all lg:h-[45px]"
        :class="{ 'lg:!h-6': isStickied }"
        is-pass-w-h
      />
    </NuxtLink>

    <HeaderMenu
      class="max-lg:fixed max-lg:right-0 max-lg:top-9"
      :class="{ 'max-lg:translate-x-0': isShowMenu, 'max-lg:translate-x-[100vw]': !isShowMenu }"
    />

    <div class="flex gap-4">
      <Btn color="ghost">{{ $t('login') }}</Btn>
      <Btn>{{ $t('tryfree') }}</Btn>
    </div>
    <Btn
      icon="icon_burger"
      color="transparent"
      size="link"
      icon-class="text-2xl"
      is-icon-only
      classes="lg:hidden absolute right-5 top-1.5"
      @click="isShowMenu = !isShowMenu"
    />
  </div>
</template>

<script setup lang="ts">
import HeaderMenu from '@/components/base/HeaderMenu.vue'

import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)

const localeRoute = useLocaleRoute()

const isStickied = useState('isStickied', () => false)

const isHeaderMounted = useState('isHeaderMounted', () => false)

const isShowMenu = ref(false)

watchEffect(() => {
  isStickied.value = y.value > 0
})

onMounted(() => {
  isHeaderMounted.value = true
})
</script>
