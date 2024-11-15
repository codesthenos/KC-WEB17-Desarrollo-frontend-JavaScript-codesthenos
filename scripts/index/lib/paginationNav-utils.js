import { buttonClassName, paginateButtonId, paginateButtonText } from "./consts.js"

export const createPaginationButton = ({ pagButtonText }) => {
  const paginationButton = document.createElement('button')
  paginationButton.setAttribute('id', paginateButtonId)
  paginationButton.classList.add(buttonClassName)
  paginationButton.textContent = pagButtonText ? pagButtonText : paginateButtonText

  return paginationButton
}

export const createNextPageButton = () => {

}

export const createPreviousPageButton = () => {

}