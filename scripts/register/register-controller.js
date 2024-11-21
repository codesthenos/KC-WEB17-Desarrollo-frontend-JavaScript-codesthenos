import { removeLoadingClassNames } from '../lib/removeLoadingClassNames.js'
import { handleRegisterUser } from './lib/handleRegister.js'
import { fireNotificationEvent } from '../lib/fire-notification-event.js'
import { errorNoti, REGEXP } from '../lib/consts.js'

export const registerController = ({ element, notificationElement }) => {
  removeLoadingClassNames({ element: notificationElement })
  element.addEventListener('submit', event => {
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
      errors.push('Passwords doesnt match')
    }

    for (const error of errors) {
      alert(error)
    }

    if (errors.length === 0) {
      handleRegisterUser({ userEmail, userPassword, element })
    }
  })
}
