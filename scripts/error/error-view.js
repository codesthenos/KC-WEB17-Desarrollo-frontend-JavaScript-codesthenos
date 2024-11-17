import { errorClassName } from '../lib/consts.js'

export const errorView = ({ errorMessage }) => {
  const errorH2 = document.createElement('h2')
  errorH2.textContent = errorMessage
  errorH2.classList.add(errorClassName)
  return errorH2
}