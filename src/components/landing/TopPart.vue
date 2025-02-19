<template>
  <div class="top-part">
    <div class="container">
      <EquipmentForm />
    </div>
  </div>
</template>

<script setup lang="js">
import EquipmentForm from '~/components/forms/EquipmentForm.vue'
</script>

<style lang="scss" scoped>
.top-part {
  @apply flex min-h-[100vh] items-center bg-[url(/assets/images/bg.webp)] bg-cover
  bg-center bg-no-repeat pb-4 pt-[114px] lg:px-[38px] lg:pb-14;
}

.cursor {
  display: inline-block;
  width: 1px;
  background-color: black;

  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
