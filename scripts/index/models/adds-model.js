import { API, noAddsErrorMessage } from "../lib/lib.js"

// query params for pagination
// _page & _limit
export const addsModel = async (queryParams = {}) => {
  try {
    let query = API
    if (queryParams.pageValue || queryParams.limitValue) {
      query = `${query}?_page=${queryParams.pageValue}&_limit=${queryParams.limitValue}`
    }

    const response = await fetch(query)

    const fetchedAdds = { adds: await response.json() }

    if (!fetchedAdds.adds.length){
      return { error: noAddsErrorMessage }
    } else {
      return fetchedAdds
    }
  } catch (error) {
    return { error: noAddsErrorMessage }
  }
}
