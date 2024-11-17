import { API, noAddsMessage } from "../lib/consts.js"

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
      throw new Error(noAddsMessage)
    } else {
      sessionStorage.clear()
      sessionStorage.setItem('addsDB', JSON.stringify(fetchedAdds))
      return fetchedAdds
    }
  } catch (error) {
    return { error: error.message }
  }
}
