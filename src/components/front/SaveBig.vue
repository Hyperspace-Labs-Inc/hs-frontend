<template>
  <div class="container py-[120px]">
    <div class="px-[96px]">
      <div class="h2 text-center">
        {{ $t('save_big') }}
        <span class="text-gradient">{{ $t('all_in_one') }}</span>
        {{ $t('access') }}
      </div>

      <table class="web-big-body mt-8 w-full">
        <tbody>
          <tr>
            <td></td>
            <td
              class="rounded-t-[32px] bg-black-950 px-4 text-[13px] leading-[17px] tracking-[-0.278px]"
            >
              buying
              <br />
              <strong>separate AI tools</strong>
            </td>
            <td></td>
          </tr>
          <tr>
            <td class="u18b border-b border-black-1000/20 py-3">Cost per Model</td>
            <td class="border-b border-black-1000/20 bg-black-950 px-4 py-3">$20 each</td>
            <td
              class="relative block rounded-t-[32px] border-b border-l border-r border-t border-purple border-b-black-1000/20 bg-white px-4 pb-3 pt-6"
            >
              <strong>$14.99</strong>

              <img
                src="/assets/images/hs.webp"
                alt=""
                class="absolute bottom-full left-2 w-[114px] object-contain"
              />
            </td>
          </tr>
          <tr>
            <td class="u18b border-b border-black-1000/20 py-3">Models included</td>
            <td class="border-b border-black-1000/20 bg-black-950 px-4 py-3">1</td>
            <td
              class="border-b border-l border-r border-purple border-b-black-1000/20 bg-white px-4 py-3"
            >
              <strong>1 000+</strong>
            </td>
          </tr>
          <tr>
            <td class="u18b py-3">Total Monthly Cost</td>
            <td class="rounded-b-[32px] bg-black-950 px-4 py-3">
              $200+
              <br />
              for 10 models
            </td>
            <td
              class="relative block rounded-b-[32px] border-b border-l border-r border-purple bg-white px-4 py-3"
            >
              <strong>$14.99</strong>
              <br />
              for all

              <img src="/assets/images/arrow_down.svg" alt="" class="absolute top-[90%]" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
