<template>
  <div class="container mt-[145px]">
    <div class="f36-700 text-center text-black-100">
      {{ $t('fill') }}
    </div>

    <ContactForm class="mt-10" />
  </div>
</template>

<script setup lang="ts">
import ContactForm from '~/components/forms/ContactForm.vue'
</script>
