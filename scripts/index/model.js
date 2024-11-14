// const emptyArrayEndpoint = 'http://localhost:8000/api/test'
// const unExistentEndpoint = 'http://localhost:8000/api/aslkdas'

import { API, noAddsErrorMessage, noCollectionErrorMessage } from "./lib.js"

// query params for pagination
// _page & _limit
export const fetchAdds = async (queryParams = {}) => {
  try {
    let query = API
    if (queryParams.pageValue || queryParams.limitValue) query = `${query}?_page=${queryParams.pageValue}&_limit=${queryParams.limitValue}`

    const response = await fetch(query)

    if (response.status === 404) return { error: noCollectionErrorMessage }

    const fetchedAdds = { adds: await response.json() }

    return fetchedAdds.adds.length > 0 ? fetchedAdds : { error: noAddsErrorMessage }
  } catch (error) {
    return { error }
  }
}
