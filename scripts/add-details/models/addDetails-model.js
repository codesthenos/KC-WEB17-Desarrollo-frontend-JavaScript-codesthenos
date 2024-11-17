import { noId, noAdd } from '../../add-details/lib/consts.js'

export const addDetailsModel = () => {
  try {
    const params = new URLSearchParams(window.location.search)
    const addId = params.get('id')
    if (!addId) throw new Error(noId)
    const addsDB = JSON.parse(sessionStorage.getItem('addsDB'))
    const adds = addsDB.adds
    const add = adds.find(add => add.id === addId)
    if (!add) throw new Error(noAdd)
    return { add }
  } catch (error) {
    return { error: error.message }
  }
}
