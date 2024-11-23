import { errorNoti, REGEXP, SUCCESS_MESSAGES, successNoti } from './consts.js'
import { fireNotificationEvent } from './fire-notification-event.js'
import { registerUser } from '../auth-models/register-model.js'

export const validateRegisterLogin = ({ userEmail, userPassword, userPasswordConfirm }) => {
  const errors = []

  const emailRegExp = new RegExp(REGEXP.email)

  if (!emailRegExp.test(userEmail)) {
    errors.push('Wrong email format')
  }
  if (userPasswordConfirm && userPassword !== userPasswordConfirm) {
    errors.push('Passwords doesn\'t match')
  }
  return errors
}

export const takeLoginInputsValue = ({ emailId, passId }) => {
  const userEmailInput = document.getElementById(emailId)
  const userPasswordInput = document.getElementById(passId)

  const userEmail = userEmailInput.value
  const userPassword = userPasswordInput.value

  return { userEmail, userPassword }
}

export const takeRegisterInputsValue = ({ emailId, passId, passConfirmId }) => {
  const userPasswordConfirmInput = document.getElementById(passConfirmId)
  
  const { userEmail, userPassword } = takeLoginInputsValue({ emailId, passId })

  const userPasswordConfirm = userPasswordConfirmInput.value
  
  return { userEmail, userPassword, userPasswordConfirm }
}

export const handleRegister = async ({ element, userEmail, userPassword }) => {
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