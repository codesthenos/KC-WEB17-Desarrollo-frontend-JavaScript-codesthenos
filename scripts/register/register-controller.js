import { removeLoadingClassNames } from '../lib/removeLoadingClassNames.js'
import { fireNotificationEvent } from '../lib/fire-notification-event.js'
import { errorNoti, REGEXP } from '../lib/consts.js'
import { registerUser } from '../auth-models/register-model.js'

export const registerController = ({ element, notificationElement }) => {
  removeLoadingClassNames({ element: notificationElement })
  element.addEventListener('submit', async (event) => {
    event.preventDefault()

    const userEmailInput = document.getElementById('email')
    const userPasswordInput = document.getElementById('password')
    const userPasswordConfirmInput = document.getElementById('password-confirm')

    const userEmail = userEmailInput.value
    const userPassword = userPasswordInput.value
    const userPasswordConfirm = userPasswordConfirmInput.value

    const errors = []

    const emailRegExp = new RegExp(REGEXP.email)

    if (!emailRegExp.test(userEmail)) {
      errors.push('Wrong email format')
    }
    if (userPassword !== userPasswordConfirm) {
      errors.push('Passwords doesn\'t match')
    }

    if (errors.length === 0) {
      try {
        await registerUser({ userEmail, userPassword })
        window.location.href = '/'
      } catch (error) {
        fireNotificationEvent({ element, type: errorNoti, errorList: [error.message] })
      }
    } else {
      fireNotificationEvent({ element, type: errorNoti, errorList: errors })
    }
  })
}
