<template>
  <div class="min-h-[100vh]">
    <TopPart />

    <HyperLoop v-if="false" />

    <WhatIsHyperSpace />
  </div>
</template>

<script setup lang="ts">
import TopPart from '~/components/front/TopPart.vue'

import HyperLoop from '~/components/front/HyperLoop.vue'

import WhatIsHyperSpace from '~/components/front/WhatIsHyperSpace.vue'
</script>
