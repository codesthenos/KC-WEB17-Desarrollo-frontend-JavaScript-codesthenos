import { indexController } from '../controllers/index-controller.js'
import { addsPerPage, initialPage, paginateButtonId, paginateButtonText, showAllButtonText } from './consts.js'

// paginate button handler
export const paginateButtonHandler = async () => {
  const queryParams = { pageValue: initialPage, limitValue: addsPerPage }
  const paginationButton = document.getElementById(paginateButtonId)
  if (paginationButton.textContent === paginateButtonText) {
    await indexController({ queryParams, pagButtonText: showAllButtonText })
  } else {
    await indexController({ pagButtonText: paginateButtonText })
  }
}

// nextPage button handler
export const nextPageButtonHandler = ({ paginationParams }) =>
  async () => {
    await indexController({ queryParams : { pageValue: paginationParams.pageValue + 1, limitValue: paginationParams.limitValue }, pagButtonText: showAllButtonText })
}
// previousPage button handler
export const previousPageButtonHandler = ({ paginationParams }) => 
  async () => {
    await indexController({ queryParams : { pageValue: paginationParams.pageValue - 1, limitValue: paginationParams.limitValue }, pagButtonText: showAllButtonText })
}
