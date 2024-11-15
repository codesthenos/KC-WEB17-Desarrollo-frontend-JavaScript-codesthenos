import { indexController } from '../controllers/index-controller.js'
import { addsPerPage, initialPage, previousPageButtonId, nextPageButtonId, paginateButtonId, paginateButtonText, showAllButtonText } from './consts.js'

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
export const nextPageButtonHandler = ({ paginationParams }, numberOfTotalAdds) =>
  async () => {
    const currentPage = paginationParams.pageValue
    const limitAdds = paginationParams.limitValue
    const isLastPage = currentPage * limitAdds >= numberOfTotalAdds
    if (!isLastPage) {
      await indexController({ queryParams : { pageValue: currentPage + 1, limitValue: limitAdds }, pagButtonText: showAllButtonText })
    } else {
      const nextPageButton = document.getElementById(nextPageButtonId)
      nextPageButton.setAttribute('disabled', true)
      nextPageButton.classList.add('disabled')
    }
}
// previousPage button handler
export const previousPageButtonHandler = ({ paginationParams }) => 
  async () => {
    const currentPage = paginationParams.pageValue
    const limitAdds = paginationParams.limitValue
    const isLastPage = currentPage <= 1
    if (!isLastPage) {
      await indexController({ queryParams : { pageValue: currentPage - 1, limitValue: limitAdds }, pagButtonText: showAllButtonText })
    } else {
      const previousPageButton = document.getElementById(previousPageButtonId)
      previousPageButton.setAttribute('disabled', true)
      previousPageButton.classList.add('disabled')
    }
}
