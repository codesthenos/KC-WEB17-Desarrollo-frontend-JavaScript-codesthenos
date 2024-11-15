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
export const nextPageButtonHandler = async () => {
  
}
// previousPage button handler

