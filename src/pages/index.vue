<template>
  <div class="min-h-[100vh]">
    <TopPart />

    <HyperLoop v-if="false" />

    <WhatIsHyperSpace />

    <WhyChooseHyperSpace />

    <RealSavings />

    <EnchanceYourEfficiency />

    <Reviews />

    <ChooseYourDirection/>
  </div>
</template>

<script setup lang="ts">
import TopPart from '~/components/front/TopPart.vue'

import HyperLoop from '~/components/front/HyperLoop.vue'

import WhatIsHyperSpace from '~/components/front/WhatIsHyperSpace.vue'

import WhyChooseHyperSpace from '~/components/front/WhyChooseHyperSpace.vue'

import RealSavings from '~/components/front/RealSavings.vue'

import EnchanceYourEfficiency from '~/components/front/EnchanceYourEfficiency.vue'
import Reviews from '~/components/front/Reviews.vue'
import ChooseYourDirection from "~/components/front/ChooseYourDirection.vue";
</script>
