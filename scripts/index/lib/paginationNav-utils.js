import { buttonClassName, disabledClassName, nextPageButtonId, nextPageButtonText, paginateButtonId, previousPageButtonId, previousPageButtonText } from "./consts.js"

export const createPaginationButton = ({ pagButtonText }) => {
  const paginationButton = document.createElement('button')
  paginationButton.setAttribute('id', paginateButtonId)
  paginationButton.classList.add(buttonClassName)
  paginationButton.textContent = pagButtonText

  return paginationButton
}

export const createNextPageButton = ({ isLastPage }) => {
  const nextPageButton = document.createElement('button')
  nextPageButton.setAttribute('id', nextPageButtonId)
  nextPageButton.classList.add(buttonClassName)
  nextPageButton.textContent = nextPageButtonText
  if (isLastPage) {
    nextPageButton.setAttribute('disabled', true)
    nextPageButton.classList.add(disabledClassName)
  }
  return nextPageButton
}

export const createPreviousPageButton = ({ isFirstPage }) => {
  const previousPageButton = document.createElement('button')
  previousPageButton.setAttribute('id', previousPageButtonId)
  previousPageButton.classList.add(buttonClassName)
  previousPageButton.textContent = previousPageButtonText
  if (isFirstPage) {
    previousPageButton.setAttribute('disabled', true)
    previousPageButton.classList.add(disabledClassName)
  }
  return previousPageButton
}