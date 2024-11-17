export const addDetailsModel = () => {
  try {
    const params = new URLSearchParams(window.location.search)
    const addId = params.get('id')
    const addsDB = JSON.parse(sessionStorage.getItem('addsDB'))
    const adds = addsDB.adds
    const add = adds.find(add => add.id === addId)
    console.log(add)
  } catch (error) {
    console.log(error.message)
    return { error: error.message }
  }
}
