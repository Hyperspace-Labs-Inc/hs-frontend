<template>
  <div class="container">
    <div
      class="flex min-h-[502px] rounded-[64px] bg-black bg-[url(/assets/images/letthe_bg.webp)] bg-cover bg-bottom bg-no-repeat"
    >
      <div class="flex flex-1 items-center justify-center text-white">
        <div class="flex flex-col gap-10">
          <div class="flex items-center gap-4">
            <GIcon name="star" class="text-[26px] text-green-600" />
            <GIcon name="star" class="text-[26px] text-green-600" />
            <GIcon name="star" class="text-[26px] text-green-600" />
          </div>

          <div>
            <div class="h3">
              {{ $t('let_the_ai') }}
              <span class="text-green-600">{{ $t('work') }}</span>
            </div>
            <div class="h3 text-green-600">{{ $t('and_generate') }}</div>
            <div class="h3">
              <span class="text-green-600">{{ $t('money') }}</span>
              {{ $t('for_you') }}
            </div>
          </div>

          <Btn
            w-fit
            size="big"
            icon-prepend="icon_arrow_right_up"
            color="gradient-r"
            icon-prepend-class="text-xs"
            classes="uppercase gap-4"
          >
            {{ $t('tryfree') }}
          </Btn>
        </div>
      </div>
      <div
        class="flex-1 rounded-r-[64px] bg-[url(/assets/images/alltools.webp)] bg-cover bg-no-repeat"
      >
        &nbsp;
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
