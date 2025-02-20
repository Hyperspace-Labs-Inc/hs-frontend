export default defineNuxtPlugin({
  name: 'init',
  setup(app) {
    const { getCatalog } = useCatalog()

    getCatalog()
  },
})
