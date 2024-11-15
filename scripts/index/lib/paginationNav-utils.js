import { buttonClassName, nextPageButtonId, nextPageButtonText, paginateButtonId, paginateButtonText, previousPageButtonId, previousPageButtonText } from "./consts.js"

export const createPaginationButton = ({ pagButtonText }) => {
  const paginationButton = document.createElement('button')
  paginationButton.setAttribute('id', paginateButtonId)
  paginationButton.classList.add(buttonClassName)
  paginationButton.textContent = pagButtonText ? pagButtonText : paginateButtonText

  return paginationButton
}

export const createNextPageButton = () => {
  const nextPageButton = document.createElement('button')
  nextPageButton.setAttribute('id', nextPageButtonId)
  nextPageButton.classList.add(buttonClassName)
  nextPageButton.textContent = nextPageButtonText
  return nextPageButton
}

export const createPreviousPageButton = () => {
  const previousPageButton = document.createElement('button')
  previousPageButton.setAttribute('id', previousPageButtonId)
  previousPageButton.classList.add(buttonClassName)
  previousPageButton.textContent = previousPageButtonText
  return previousPageButton
}