import { CREATE_ADD_VALUES } from '../create-add/lib/consts.js'
import { errorNoti, loadingNoti, SUCCESS_MESSAGES, successNoti } from '../lib/consts.js'
import { fireNotificationEvent } from '../lib/fire-notification-event.js'
import { updateAddModel } from './updateAdd-model.js'

export const setUpdateAddInputValues = ({
  addName,
  addPrice,
  addImage,
  addDescription,
  addFor,
  addTags
}) => {
  const addNameInput = document.getElementById(CREATE_ADD_VALUES.NAME)
  const addPriceInput = document.getElementById(CREATE_ADD_VALUES.PRICE)
  const addImageInput = document.getElementById(CREATE_ADD_VALUES.IMAGE)
  const addDescriptionInput = document.getElementById(CREATE_ADD_VALUES.DESCRIPTION)
  const electronicsTagInput = document.getElementById(CREATE_ADD_VALUES.ELECTRONICS_TAG)
  const sportsTagInput = document.getElementById(CREATE_ADD_VALUES.SPORTS_TAG)
  const motorTagInput = document.getElementById(CREATE_ADD_VALUES.MOTOR_TAG)
  const addOfferInput = document.getElementById('offer')
  const addDemandInput = document.getElementById('demand')
  
  addNameInput.value = addName
  addPriceInput.value = addPrice
  addImageInput.value = addImage
  addDescriptionInput.value = addDescription

  const staticTags = [electronicsTagInput, sportsTagInput, motorTagInput]

  if (addTags && addTags.length > 0) {
    staticTags.forEach(staticTag => {
      if (addTags.some(tag => tag === staticTag.name)) {
        staticTag.checked = true
      }
    })
  }

  if (addFor === 'demand') {
    addDemandInput.checked = true
  } else {
    addOfferInput.checked = true
  }
}

export const handleUpdateAdd = async ({
  element,
  add,
  addNameValue,
  addPriceValue,
  addDescriptionValue,
  addForValue,
  addImageValue,
  addTagsValue
}) => {
  const token = localStorage.getItem('JWT')

  fireNotificationEvent({ element, type: loadingNoti })
  
  if (!token) {
    fireNotificationEvent({ element, type: errorNoti, errorList: ['UNATHORIZED Not user logged'] })
    setTimeout(() => {
      window.location.href = '/routes/login.html'
    }, 1500)
  } else {
    try {
      await updateAddModel({
        add,
        token,
        addNameValue,
        addPriceValue,
        addDescriptionValue,
        addForValue,
        addImageValue,
        addTagsValue
      })
      fireNotificationEvent({ element, type: successNoti, message: SUCCESS_MESSAGES.UPDATED_ADD })
      setTimeout(() => {
        window.location.href = `/routes/add-details.html?id=${add.id}`
      }, 1000)
    } catch (error) {
      fireNotificationEvent({ element, type: errorNoti, errorList: [error.message] })
    }
  }
}