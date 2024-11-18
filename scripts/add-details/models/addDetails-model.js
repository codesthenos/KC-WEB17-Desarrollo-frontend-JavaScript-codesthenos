import { API } from '../../lib/consts.js'
import { noId, noAdd, addsDBName } from '../lib/consts.js'

export const addDetailsModel = async () => {
  try {
    const params = new URLSearchParams(window.location.search)
    const addId = params.get('id')
    if (!addId) throw new Error(noId)
    const addsDB = JSON.parse(sessionStorage.getItem(addsDBName))
    if (!addsDB) {
      const query = `${API}${addId}`
      const response = await fetch(query)
      const fetchedAdd = await response.json()
      if (fetchedAdd.id !== addId) throw new Error(noAdd)
      return { add: fetchedAdd }
    } else {
      const adds = addsDB.adds
      const add = adds.find(add => add.id === addId)
      if (!add) throw new Error(noAdd)
      return { add }
    }
  } catch (error) {
    return { error: error.message }
  }
}
