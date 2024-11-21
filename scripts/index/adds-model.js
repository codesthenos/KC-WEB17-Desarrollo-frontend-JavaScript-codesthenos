import { noAddsMessage } from './lib/consts.js'
import { API } from '../lib/consts.js'

// query params for pagination
// _page & _limit
export const addsModel = async ({ queryParams }) => {
  try {
    const { pageValue, limitValue } = queryParams

    const addsDB = JSON.parse(sessionStorage.getItem('addsDB'))
    if (!pageValue && !limitValue && addsDB) {
      return { adds: addsDB }
    }

    let query = API
    if (pageValue && limitValue) {
      query = `${query}?_page=${pageValue}&_limit=${limitValue}`
    }


    const response = await fetch(query)
    const fetchedAdds = await response.json()

    if (!fetchedAdds.length){
      throw new Error(noAddsMessage)
    } else {
      if (!pageValue && !limitValue) {
        sessionStorage.setItem('addsDB', JSON.stringify(fetchedAdds))
      }
      return { adds: fetchedAdds }
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
