import { paginateButtonId } from "./consts.js"

export const createPaginationButton = ({ pagButtonText }) => {
  const paginationButton = document.createElement('button')
  paginationButton.setAttribute('id', paginateButtonId)
  paginationButton.classList.add('btn')
  paginationButton.textContent = pagButtonText ? pagButtonText : 'PAGINATE'

  return paginationButton
}

export const createNextPageButton = () => {

}

export const createPreviousPageButton = () => {

}