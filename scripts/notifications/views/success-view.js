import { successClassName } from '../../lib/consts.js'

export const successView = ({ successMessage }) => {
  const successH2 = document.createElement('h2')
  successH2.textContent = successMessage
  successH2.classList.add(successClassName)
  return successH2
}