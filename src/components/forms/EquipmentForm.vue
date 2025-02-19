<template>
  <div class="equipment-form">
    <div class="f25-600 text-center text-black-100">{{ $t('leave_request') }}</div>

    <div class="mt-[38px] flex flex-col gap-5">
      <div>
        <div class="f16-600 text-blue">{{ $t('country') }}:</div>

        <USelect v-model="country" size="xl" :options="countries" padded variant="none" />
      </div>

      <div>
        <div class="f16-600 text-blue">{{ $t('necessary') }}:</div>

        <div class="mt-[11px] flex flex-wrap gap-x-[22px] gap-y-2">
          <UCheckbox
            v-for="(item, index) in equipments"
            v-model="equipment[index]"
            :key="index"
            :label="item"
          />
        </div>
      </div>

      <div>
        <div class="f16-600 text-blue">{{ $t('date') }}:</div>

        <div class="mt-[11px] flex flex-wrap gap-x-[22px] gap-y-2">
          <DateRangePicker v-model="date" />
        </div>
      </div>

      <div>
        <div class="f16-600 text-blue">{{ $t('peoples_count') }}:</div>

        <div class="mt-[11px] flex flex-wrap gap-y-2">
          <button
            v-for="n in 10"
            :key="n"
            @click="peopleCount = n"
            @mouseenter="handleMouseEnter(n)"
            @mouseleave="handleMouseLeave"
            style="outline: 0"
          >
            <GIcon
              name="icon_user"
              class="cursor-pointer text-[34px] text-black-200 transition-all hover:text-blue"
              :class="{
                '!text-blue': hoverCount !== null ? hoverCount >= n : peopleCount >= n,
              }"
            />
          </button>

          <button
            @click="peopleCount = 11"
            @mouseenter="handleMouseEnter(11)"
            @mouseleave="handleMouseLeave"
            style="outline: 0"
            class="f27-500 text-black-200 hover:text-blue"
            :class="{
              '!text-blue': hoverCount !== null ? hoverCount >= 11 : peopleCount >= 11,
            }"
          >
            +
          </button>
        </div>
      </div>
    </div>

    <div class="mt-[33px]">
      <Btn size="medium" :disabled="isLoading" :loading="isLoading" @click="sendHandler">
        {{ $t('request') }}
      </Btn>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const { t, tm } = useI18n()

const countries = tm('countries')

const equipments = tm('necessary_equipment')

const date = ref()

const peopleCount = ref()

const hoverCount = ref(null)

const handleMouseEnter = n => {
  hoverCount.value = n
}

const handleMouseLeave = () => {
  hoverCount.value = null
}

const equipment = ref([])

const selectedEquipment = computed(() => equipments?.filter?.((_, index) => equipment.value[index]))

const country = ref(countries[0])

const name = ref('')

const contact = ref('')

const desc = ref('')

const init = ref(false)

const errors = computed(() => {
  if (!init.value) {
    return []
  }

  const err = []

  const fields = [name.value, contact.value, desc.value]

  fields.forEach((item, index) => {
    if (item.length < 3) {
      err[index] = true
    }
  })

  return err
})

const isLoading = ref(false)

const { errorToast, successToast } = useToasts()

const isShowForm = useState('isShowForm', () => false)

const clearForm = () => {
  name.value = ''

  contact.value = ''

  desc.value = ''
}

const sendHandler = async () => {
  init.value = true

  isLoading.value = true

  try {
    const body = {
      personalizations: [
        {
          to: [
            {
              email: config.public.mailTo,
            },
          ],
        },
      ],
      from: {
        email: config.public.mailFrom,
        name: 'GetSki',
      },
      subject: config.public.mailSubject,
      content: [
        {
          type: 'text/html',
          value: `
<div>Страна: ${country.value}</div>
<div>Оборудование: ${selectedEquipment.value?.join?.(', ')}</div>
<div>Даты: ${date.value}</div>
<div>Кол-во человек: ${peopleCount.value}</div>`,
        },
      ],
    }

    const { error } = await useFetch('/api/mail/send', {
      method: 'POST',
      body,
    })

    if (error.value) {
      throw error.value
    }

    clearForm()

    successToast(t('success'))
  } catch (err) {
    errorToast(err)
  } finally {
    isLoading.value = false

    init.value = false

    isShowForm.value = false
  }
}
</script>

<style lang="scss" scoped>
.equipment-form {
  @apply max-w-[517px] rounded-[5px] bg-white p-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
  max-lg:mx-auto lg:pb-[34px] lg:pl-[34px] lg:pr-[46px] lg:pt-[37px];
}
</style>
