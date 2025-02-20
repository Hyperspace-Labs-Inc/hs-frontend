<template>
  <div class="min-h-[100vh]">
    <TopPart />

    <HyperLoop v-if="false" />

    <WhatIsHyperSpace />

    <WhyChooseHyperSpace />
  </div>
</template>

<script setup lang="ts">
import TopPart from '~/components/front/TopPart.vue'

import HyperLoop from '~/components/front/HyperLoop.vue'

import WhatIsHyperSpace from '~/components/front/WhatIsHyperSpace.vue'

import WhyChooseHyperSpace from '~/components/front/WhyChooseHyperSpace.vue'
</script>
