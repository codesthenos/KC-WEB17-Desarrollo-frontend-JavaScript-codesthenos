import { API, errorNoti, REGEXP, SUCCESS_MESSAGES, successNoti } from './consts.js'
import { fireNotificationEvent } from './fire-notification-event.js'
import { authUser } from '../auth-models/authUser-model.js'

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

export const validateLogin = ({ userEmail }) => {
  const errors = []

  const emailRegExp = new RegExp(REGEXP.email)

  if (!emailRegExp.test(userEmail)) {
    errors.push('Wrong email format')
  }
  return errors
}

export const validateRegister = ({ userEmail, userPassword, userPasswordConfirm }) => {
  const errors = validateLogin({ userEmail })

  if (userPasswordConfirm && userPassword !== userPasswordConfirm) {
    errors.push('Passwords doesn\'t match')
  }
  return errors
}

export const handleLogin = async ({ element, userEmail, userPassword, endpoint }) => {
  try {
    const { accessToken } = await authUser({ userEmail, userPassword, endpoint })

    localStorage.setItem('JWT', accessToken)

    fireNotificationEvent({ element, type: successNoti, message: SUCCESS_MESSAGES.LOGGED })

    setTimeout(() => {
      window.location.href = '/'
    }, 750)
  } catch (error) {
    fireNotificationEvent({ element, type: errorNoti, errorList: [error.message] })
  }
}

export const handleRegister = async ({ element, userEmail, userPassword, endpoint }) => {
  try {
    await authUser({ userEmail, userPassword, endpoint })

    fireNotificationEvent({ element, type: successNoti, message: SUCCESS_MESSAGES.REGISTERED })

    setTimeout(async () => {
      await handleLogin({ element, userEmail, userPassword, endpoint: API.LOGIN })
    }, 750)
  } catch (error) {
    fireNotificationEvent({ element, type: errorNoti, errorList: [error.message] })
  }
}

export const isUserLogged = () => {
  const token = localStorage.getItem('JWT')

  return !!token
}