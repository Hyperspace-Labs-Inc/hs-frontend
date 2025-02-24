<template>
  <div class="container py-[72px] lg:py-[120px]">
    <div class="lg:px-[96px]">
      <div class="h2 text-center">
        {{ $t('save_big') }}
        <span class="text-gradient">{{ $t('all_in_one') }}</span>
        {{ $t('access') }}
      </div>

      <div class="u17b mt-6 flex items-center justify-center gap-4 lg:hidden">
        <img src="/assets/images/switch.svg" alt="" class="w-[52px] object-contain" />

        {{ $t('hyperspace') }}
      </div>

      <div class="save-big--bg-mobile">
        <img src="/assets/images/hs.webp" alt="" class="w-[81px] object-contain" />

        <div class="mt-6 flex flex-col gap-4">
          <div class="flex justify-between">
            <div class="p-m">{{ $t('cost_title') }}</div>
            <div class="h4">$19.99</div>
          </div>

          <Divider class="bg-black-1100" />

          <div class="flex justify-between">
            <div class="p-m">{{ $t('models_included') }}</div>
            <div class="h4">1 000 +</div>
          </div>

          <Divider class="bg-black-1100" />

          <div class="u14b flex flex-col items-end text-right">
            <div class="h3 text-gradient">$19.99</div>
            {{ $t('for_all') }}
          </div>
        </div>
        <img
          src="/assets/images/arrow_down_mobile.svg"
          alt=""
          class="absolute left-3/4 top-full mt-[-2px]"
        />
      </div>

      <table class="web-big-body mt-[73px] w-full max-lg:hidden">
        <tbody>
          <tr>
            <td></td>
            <td class="p-m rounded-t-[32px] bg-black-950 px-9 pt-9">
              buying
              <br />
              <strong class="u19b">{{ $t('separate') }}</strong>
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
            <td class="u18b border-b border-black-1000/20 py-3">{{ $t('cost') }}</td>
            <td class="border-b border-black-1000/20 bg-black-950 p-9">$20 {{ $t('each') }}</td>
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

      <div class="h5 mt-16 text-center lg:mt-[83px]">
        <span class="text-gradient">{{ $t('save_over') }}</span>
        {{ $t('month') }}
      </div>

      <Btn classes="lg:w-fit lg:mx-auto mt-6" to="/onboarding">{{ $t('start_free') }}</Btn>
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
    before:bg-[url(/assets/images/big.webp)] before:bg-[100%_auto]
    before:bg-bottom before:bg-no-repeat before:content-[''];

    &-mobile {
      @apply relative mt-8 rounded-[32px] bg-white p-6 ring-[3px] ring-inset ring-purple 
      before:absolute before:-bottom-4 before:left-0 before:z-[-1]
      before:h-[200px] before:w-full before:bg-[url(/assets/images/big.webp)]
      before:bg-[100%_auto] before:bg-bottom
      before:bg-no-repeat before:content-[''] lg:hidden;
    }
  }
}
</style>
