import { fireNotificationEvent } from '../lib/fire-notification-event.js'
import { errorNoti, loadingNoti, SUCCESS_MESSAGES, successNoti } from '../lib/consts.js'
import { validateRegisterLogin } from '../lib/auth-utils.js'
import { registerUser } from '../auth-models/register-model.js'

export const registerController = ({ element }) => {
  element.addEventListener('submit', (event) => {
    event.preventDefault()

    fireNotificationEvent({ element, type: loadingNoti })
    
    const userEmailInput = document.getElementById('email')
    const userPasswordInput = document.getElementById('password')
    const userPasswordConfirmInput = document.getElementById('password-confirm')
    
    const userEmail = userEmailInput.value
    const userPassword = userPasswordInput.value
    const userPasswordConfirm = userPasswordConfirmInput.value
    
    const errors = validateRegisterLogin({ userEmail, userPassword, userPasswordConfirm })
    
    if (errors.length > 0) {
      fireNotificationEvent({ element, type: errorNoti, errorList: errors })
    } else {
      handleRegister({ element, userEmail, userPassword })
    }
  })
}

const handleRegister = async ({ element, userEmail, userPassword }) => {
  try {
    await registerUser({ userEmail, userPassword })
    fireNotificationEvent({ element, type: successNoti, message: SUCCESS_MESSAGES.REGISTERED })
    setTimeout(() => {
      window.location.href = '/'
    }, 1500)
  } catch (error) {
    fireNotificationEvent({ element, type: errorNoti, errorList: [error.message] })
  }
}
