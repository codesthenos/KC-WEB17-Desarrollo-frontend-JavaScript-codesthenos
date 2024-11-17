import { paginateButtonId, buttonClassName } from '../../lib/consts.js'

export const createTogglePaginationButton = ({ pagButtonText }) => {
  const paginationButton = document.createElement('button')
  paginationButton.setAttribute('id', paginateButtonId)
  paginationButton.classList.add(buttonClassName)
  paginationButton.textContent = pagButtonText

  return paginationButton
}