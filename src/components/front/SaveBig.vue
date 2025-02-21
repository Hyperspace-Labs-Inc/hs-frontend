<template>
  <div class="container py-[120px]">
    <div class="px-[96px]">
      <div class="h2 text-center">
        {{ $t('save_big') }}
        <span class="text-gradient">{{ $t('all_in_one') }}</span>
        {{ $t('access') }}
      </div>

      <table class="web-big-body mt-[73px] w-full">
        <tbody>
          <tr>
            <td></td>
            <td class="p-m rounded-t-[32px] bg-black-950 px-9 pt-9">
              buying
              <br />
              <strong class="u19b">separate AI tools</strong>
            </td>
            <td class="w-6 flex-shrink-0">&nbsp;</td>
            <td
              class="h5 relative flex h-full items-center justify-center rounded-t-[32px] border-l-[5px] border-r-[5px] border-t-[5px] border-purple border-b-black-1000/20 bg-white p-11 text-center"
            >
              <img
                src="/assets/images/hs.webp"
                alt=""
                class="absolute left-1/2 top-0 z-10 mt-[-23px] w-[114px] -translate-x-1/2 object-contain"
              />
            </td>
          </tr>
          <tr>
            <td class="u18b border-b border-black-1000/20 py-3">Cost per Model</td>
            <td class="border-b border-black-1000/20 bg-black-950 p-9">$20 each</td>
            <td class="w-6 flex-shrink-0 border-b border-b-black-1000/20">&nbsp;</td>
            <td
              class="h5 relative flex h-full items-center justify-center border-b border-l-[5px] border-r-[5px] border-purple border-b-black-1000/20 bg-white px-4 pb-8 pt-10 text-center"
            >
              $19.99
            </td>
          </tr>
          <tr>
            <td class="u18b border-b border-black-1000/20 py-3">Models included</td>
            <td class="p-m border-b border-black-1000/20 bg-black-950 p-9">1</td>
            <td class="w-6 flex-shrink-0 border-b border-b-black-1000/20">&nbsp;</td>
            <td
              class="h5 flex items-center justify-center border-b border-l-[5px] border-r-[5px] border-purple border-b-black-1000/20 bg-white p-9"
            >
              1 000+
            </td>
          </tr>
          <tr>
            <td class="u18b py-3">Total Monthly Cost</td>
            <td class="p-m rounded-b-[32px] bg-black-950 p-9">$200+ for 10 models</td>
            <td class="w-6 flex-shrink-0">&nbsp;</td>
            <td class="save-big--bg r20b">
              <strong class="h4 text-purple">$19.99</strong>

              for all

              <img src="/assets/images/arrow_down.svg" alt="" class="absolute top-full" />
            </td>
          </tr>
        </tbody>
      </table>

      <div class="h5 mt-[83px] text-center">
        <span class="text-gradient">{{ $t('save_over') }}</span>
        {{ $t('month') }}
      </div>

      <Btn w-fit classes="mx-auto mt-6">{{ $t('start_free') }}</Btn>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.save-big {
  &--bg {
    @apply relative flex flex-col items-center justify-center
    rounded-b-[32px] border-b-[5px] border-l-[5px] border-r-[5px] 
    border-purple bg-white px-20 py-3
    before:absolute before:-bottom-4 before:left-4
    before:z-[-1] before:h-[400px] before:w-full
    before:bg-[url(/assets/images/big.webp)] before:bg-[100%_auto] before:bg-contain 
    before:bg-bottom before:bg-no-repeat before:content-[''];
  }
}
</style>
