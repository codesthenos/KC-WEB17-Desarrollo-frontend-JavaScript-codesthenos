import { buttonClassName } from '../../lib/consts.js'

export const addDetailButtonView = ({ buttonId, buttonText }) => {
  const deleteAddButton = document.createElement('button')
  deleteAddButton.setAttribute('id', buttonId)
  deleteAddButton.classList.add(buttonClassName)
  deleteAddButton.textContent = buttonText

  return deleteAddButton
}