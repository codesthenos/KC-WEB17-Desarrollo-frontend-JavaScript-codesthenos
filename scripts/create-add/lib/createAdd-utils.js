import { createAddModel } from '../../auth-models/createAdd-model.js'
import { errorNoti, SUCCESS_MESSAGES, successNoti } from '../../lib/consts.js'
import { fireNotificationEvent } from '../../lib/fire-notification-event.js'
import { CREATE_ADD_VALUES } from './consts.js'

export const takeCreateAddInputsValue = () => {
  const addNameInput = document.getElementById(CREATE_ADD_VALUES.NAME) 
  const addPriceInput = document.getElementById(CREATE_ADD_VALUES.PRICE) 
  const addDescriptionInput = document.getElementById(CREATE_ADD_VALUES.DESCRIPTION) 
  const addForInput = document.querySelector(CREATE_ADD_VALUES.FOR)
  const addImageInput = document.getElementById(CREATE_ADD_VALUES.IMAGE) 

  const addNameValue = addNameInput.value 
  const addPriceValue = addPriceInput.value
  const addDescriptionValue = addDescriptionInput.value
  const addForValue = addForInput.value
  const addImageValue = addImageInput.value

  return { addNameValue, addPriceValue, addDescriptionValue, addForValue, addImageValue }
}

export const validateCreateAdd = () => {
  //TODO maybe for image url with a regexp
  return []
}


export const handleCreateAdd = async ({ element, addName, addPrice, addDescription, addFor, addImage, token }) => {
  try {
    await createAddModel({ addName, addPrice, addDescription, addFor, addImage, token })

    fireNotificationEvent({ element, type: successNoti, message: SUCCESS_MESSAGES.CREATED_ADD })

    sessionStorage.clear()

    setTimeout(() => {
      window.location.href = '/'
    }, 750)
  } catch (error) {
    fireNotificationEvent({ element, type: errorNoti, errorList: [error.message] })
  }
}