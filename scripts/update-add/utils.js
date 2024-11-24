import { CREATE_ADD_VALUES } from '../create-add/lib/consts.js'

export const setUpdateAddInputValues = ({
  addName,
  addPrice,
  addImage,
  addDescription,
  addFor
}) => {
  const addNameInput = document.getElementById(CREATE_ADD_VALUES.NAME)
  const addPriceInput = document.getElementById(CREATE_ADD_VALUES.PRICE)
  const addImageInput = document.getElementById(CREATE_ADD_VALUES.IMAGE)
  const addDescriptionInput = document.getElementById(CREATE_ADD_VALUES.DESCRIPTION)
  const addOfferInput = document.getElementById('offer')
  const addDemandInput = document.getElementById('demand')
  
  addNameInput.value = addName
  addPriceInput.value = addPrice
  addImageInput.value = addImage
  addDescriptionInput.value = addDescription

  if (addFor === 'demand') {
    addDemandInput.checked = true
  } else {
    addOfferInput.checked = true
  }
}