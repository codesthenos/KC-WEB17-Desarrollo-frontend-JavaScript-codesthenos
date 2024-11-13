// const emptyArrayEndpoint = 'test'
// const unExistentEndpoint = 'aslkdas'
// endpoint collection of adds
const addsEndpoint = 'adds'
// query params for pagination
const page = {
  key: '_page',
  value: 1
}
const limit = {
  key: '_limit',
  value: 1
}
export const fetchAdds = async () => {
  try {
    const response = await 
      fetch(`http://localhost:8000/api/${addsEndpoint}?${page.key}=${page.value}&${limit.key}=${limit.value}`)
    if (response.status === 404) return { error: '404 Not found\n\nThat collection doesnt exist' }
    const fetchedAdds = { adds: await response.json() }
    return fetchedAdds.adds.length > 0 ? fetchedAdds : { error: 'No adds' }
  } catch (error) {
    return { error }
  }
}
