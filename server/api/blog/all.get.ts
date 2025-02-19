export default eventHandler(event => {
  return queryCollection(event, 'blog').all()
})
