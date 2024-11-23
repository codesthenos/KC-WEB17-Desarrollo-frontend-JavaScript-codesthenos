import { REGEXP } from './consts.js'

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