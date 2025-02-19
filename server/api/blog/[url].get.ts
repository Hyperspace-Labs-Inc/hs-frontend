export default eventHandler(event => {
  const { url } = getRouterParams(event)

  return queryCollection(event, 'blog').path(`/blog/${url}`).first()
})
