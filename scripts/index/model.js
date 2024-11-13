// const emptyArrayEndpoint = 'http://localhost:8000/api/test'
// const unExistentEndpoint = 'http://localhost:8000/api/aslkdas'
// endpoint collection of adds
const API = 'http://localhost:8000/api/adds/'
// query params for pagination
// _page & _limit
export const fetchAdds = async (queryParams = {}) => {
  try {
    let query = API
    if (queryParams.pageValue || queryParams.limitValue) query = `${query}?_page=${queryParams.pageValue}&_limit=${queryParams.limitValue}`

    const response = await fetch(query)

    if (response.status === 404) return { error: '404 Not found\n\nThat collection doesnt exist' }

    const fetchedAdds = { adds: await response.json() }

    return fetchedAdds.adds.length > 0 ? fetchedAdds : { error: 'No adds' }
  } catch (error) {
    return { error }
  }
}
