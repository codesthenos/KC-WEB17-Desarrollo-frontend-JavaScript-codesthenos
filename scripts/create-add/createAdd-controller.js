import { API, errorNoti, loadingNoti } from '../lib/consts.js'
import { fireNotificationEvent } from '../lib/fire-notification-event.js'
import { handleCreateAdd, takeCreateAddInputsValue, validateCreateAdd } from './lib/createAdd-utils.js'

export const createAddController = ({ element }) => {
  element.addEventListener('submit', (event) => {
    event.preventDefault()

    fireNotificationEvent({ element, type: loadingNoti })

    const {
      addNameValue,
      addPriceValue,
      addDescriptionValue,
      addForValue,
      addImageValue
    } = takeCreateAddInputsValue()

    // TODO validation for image url maybe
    const errors = validateCreateAdd()

    if (errors.length > 0) {
      fireNotificationEvent({ element, type: errorNoti, errorList: errors })
    } else {
      const token = localStorage.getItem('JWT')
      handleCreateAdd({
        element,
        addName: addNameValue,
        addPrice: addPriceValue,
        addDescription: addDescriptionValue,
        addFor: addForValue,
        addImage: addImageValue,
        token
      })
    }
  })
}