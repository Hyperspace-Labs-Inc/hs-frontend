import { ref } from 'vue'

export type Model = {
  id: number
  price?: number
  slug?: string
  newSlug?: string
  type?: string
  title?: string
  description?: string
  usage?: string
  system?: string
  cover?: null | string
  logo?: string
  config?: {
    name: string
    role: string
    helpsWith: string
    mood: string
    messages: {
      role: string
      content: string
    }[]

    supports_stream: boolean
    supports_describe_image: boolean
  }
  media?: {
    id: number
    type: string
    thumbnail: string
    url: string
    path: string
    width: null | number
    height: null | number
  }[]
  settings?: {
    name: string
    role: string
    message: string
  }
  categories?: {
    id: number
    name: string
    title: null
    description: string
    slug: string
    newSlug: string
    metaTitle: null | string
    metaDescription: null | string
    shortName: null | string
    isFilter: boolean
    isPrimary: boolean
    promptExamples: null | string
    icon: null | string
    order: number
  }[]
  counts?: {
    usage: number
    views: number
  }
  rating?: {
    avg: number
  }
}

const categoriesMap = {
  chat: 'Chatbots',
  image: 'Images',
  text: 'Text',
  music: 'Music',
  voice: 'Voices',
}

const catalog = ref({} as Record<string, Model[]>)

const selectedType = ref('chat')

const selectedCategory = ref()

const selectedCategories = computed(() => {
  const categories = catalog.value?.[selectedType.value]?.flatMap?.(item => item.categories) || []

  const uniqueCategories = categories.reduce((acc, category) => {
    if (category?.id) acc[category.id] = category
    return acc
  }, {})

  return Object.values(uniqueCategories)
})

const catalogByType = computed(() => {
  const items = catalog.value?.[selectedType.value] || []

  if (!selectedCategory.value) {
    return items
  }

  return items.filter(item =>
    item.categories.some(category => category.id === selectedCategory.value)
  )
})

export const useCatalog = () => {
  const getCatalog = async () => {
    const { data } = await useFetch('/api/catalog', {
      params: { type: selectedType.value },
    })

    catalog.value[selectedType.value] = data.value?.items || []
  }

  return {
    catalog,
    catalogByType,
    selectedType,
    getCatalog,
    categoriesMap,
    selectedCategory,
    selectedCategories,
  }
}
