import { registerUser } from '../register-model.js'
import { fireNotificationEvent } from '../../lib/fire-notification-event.js'
import { errorNoti } from '../../lib/consts.js'

export const handleRegisterUser = async ({ userEmail, userPassword, element }) => {
  try {
    await registerUser({ userEmail, userPassword })
    window.location.href = '/'
  } catch (error) {
    fireNotificationEvent({ element, type: errorNoti, message: error.message })
  }
}