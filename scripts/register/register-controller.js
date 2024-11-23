import { errorNoti, loadingNoti } from '../lib/consts.js'
import { fireNotificationEvent } from '../lib/fire-notification-event.js'
import { handleRegister, takeRegisterInputsValue, validateRegisterLogin } from '../lib/auth-utils.js'

export const registerController = ({ element }) => {
  element.addEventListener('submit', (event) => {
    event.preventDefault()

    fireNotificationEvent({ element, type: loadingNoti })
    
    const {
      userEmail,
      userPassword,
      userPasswordConfirm
    } = takeRegisterInputsValue({
      emailId: 'email',
      passId: 'password',
      passConfirmId: 'password-confirm'
    })
    
    const errors = validateRegisterLogin({ userEmail, userPassword, userPasswordConfirm })
    
    if (errors.length > 0) {
      fireNotificationEvent({ element, type: errorNoti, errorList: errors })
    } else {
      handleRegister({ element, userEmail, userPassword })
    }
  })
}
