import { createAddModel } from '../../auth-models/createAdd-model.js'
import { errorNoti, SUCCESS_MESSAGES, successNoti } from '../../lib/consts.js'
import { fireNotificationEvent } from '../../lib/fire-notification-event.js'

export const validateCreateAdd = () => {

}

export const takeCreateAddInputsValue = () => {

}

export const handleCreateAdd = async ({ element, addName, addPrice, addDescription, addFor, addImage, token }) => {
  try {
    await createAddModel({ addName, addPrice, addDescription, addFor, addImage, token })

    fireNotificationEvent({ element, type: successNoti, message: SUCCESS_MESSAGES.CREATED_ADD })

    setTimeout(() => {
      window.location.href = '/'
    }, 750)
  } catch (error) {
    fireNotificationEvent({ element, type: errorNoti, errorList: [error.message] })
  }
}