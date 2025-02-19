<template>
  <component
    :is="componentType"
    :class="computedClasses"
    :to="to"
    :target="target"
    style="outline: 0"
    @click="emit('click')"
  >
    <GIcon
      v-if="icon"
      :name="icon"
      class="relative z-10 flex-shrink-0"
      :class="[iconClass, { 'opacity-0': loading }]"
    />

    <span v-if="!isIconOnly" :class="['relative z-10', slotClass, { 'opacity-0': loading }]">
      <slot />
    </span>

    <GIcon
      v-if="loading"
      name="loader"
      class="absolute left-1/2 top-1/2 z-10 flex-shrink-0 -translate-x-1/2 -translate-y-1/2 border-0 text-xl text-white no-underline shadow-none"
    />

    <GIcon
      v-if="iconPrepend"
      :name="iconPrepend"
      class="relative z-10 flex-shrink-0"
      :class="[iconPrependClass, { 'opacity-0': loading }]"
    />
  </component>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

type Props = {
  icon?: string
  iconPrepend?: string
  iconPrependClass?: string
  iconClass?: string
  size?: 'small' | 'default' | 'big' | 'medium' | 'link'
  slotClass?: string
  color?:
    | 'gradient'
    | 'ghost'
    | 'transparent'
    | 'white'
    | 'default'
    | 'green'
    | 'green-simple'
    | 'gray'
    | 'secondary'
  classes?: string
  to?: string
  target?: string
  wFit?: boolean
  disabled?: boolean
  loading?: boolean
  isIconOnly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  color: 'default',
  slotClass: 'flex-grow',
})

const sizesMap = {
  link: 'h-auto w-auto p-0 m-0',
  big: 'h-14',
  default: '',
  small: 'h-8 w-full max-w-[180px] px-6 text-base',
  medium: 'h-[46px] w-full max-w-[206px] px-6 text-lg',
}

const colorsMap = {
  default: 'bg-black text-white',
  ghost: 'bg-transparent ring-2 ring-inset ring-black text-black',
  transparent: ' ',
  gradient: 'bg-gradient-to-b hover:bg-gradient-to-t from-purple-600 to-purple text-white',
}

const emit = defineEmits(['click'])

const componentType = computed(() => (props.to ? resolveComponent('NuxtLink') : 'button'))

const computedClasses = computed(() => {
  const classes = [
    'hover:opacity-80 active:scale-105 transition-all whitespace-nowrap relative no-underline cursor-pointer appearance-none flex items-center gap-2 rounded-2xl text-center text-[17px] h-12 px-10 font-semibold',
  ]

  classes.push(props.disabled ? 'opacity-80 pointer-events-none' : '')

  classes.push(props.wFit ? 'w-fit' : 'w-full')

  classes.push(colorsMap[props.color] || colorsMap.default)

  classes.push(sizesMap[props.size] || sizesMap.default)

  if (props.classes) {
    classes.push(props.classes)
  }

  return twMerge(classes)
})
</script>
