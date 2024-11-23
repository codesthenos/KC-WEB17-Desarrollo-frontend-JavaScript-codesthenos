import { API } from '../lib/consts.js'
import { noId, noAdd, addsDBName, findAdd } from './lib/consts.js'

export const addDetailsModel = async () => {
  try {
    const params = new URLSearchParams(window.location.search)
    const addId = params.get('id')

    if (!addId) throw new Error(noId)

    const addsDB = JSON.parse(sessionStorage.getItem(addsDBName))

    if (addsDB && findAdd({ adds: addsDB, addId })) {
      
      return { add: findAdd({ adds: addsDB, addId }) }
    } else {
      const query = `${API.ADDS}/${addId}`
      const response = await fetch(query)
      const fetchedAdd = await response.json()

      if (fetchedAdd.id !== addId) throw new Error(noAdd)

      return { add: fetchedAdd }
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
