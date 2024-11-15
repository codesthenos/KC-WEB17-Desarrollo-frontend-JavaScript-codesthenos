import { indexController } from '../controllers/index-controller.js'
import { addsPerPage, initialPage, paginateButtonId, paginateButtonText, showAllButtonText } from './consts.js'

// paginate button handler
export const paginateButtonHandler = async () => {
  const queryParams = { pageValue: initialPage, limitValue: addsPerPage }
  const paginationButton = document.getElementById(paginateButtonId)
  if (paginationButton.textContent === paginateButtonText) {
    await indexController({ queryParams, paginationOptions: { pagButtonText: showAllButtonText } })
  } else {
    await indexController({ paginationOptions: { pagButtonText: paginateButtonText } })
  }
}

// nextPage button handler
export const nextPageButtonHandler = ({ paginationParams }, numberOfTotalAdds) =>
  async () => {
    const currentPage = paginationParams.pageValue
    const limitAdds = paginationParams.limitValue
    const isLastPage = currentPage * limitAdds >= numberOfTotalAdds
    if (!isLastPage) {
      console.log('hola')
      await indexController({ queryParams : { pageValue: currentPage + 1, limitValue: limitAdds }, paginationOptions: { pagButtonText: showAllButtonText } })
    } else {
      await indexController({ queryParams : { pageValue: currentPage, limitValue: limitAdds }, paginationOptions: { pagButtonText: showAllButtonText, nextPageButtonIsLastPage: isLastPage } })
    }
}
// previousPage button handler
export const previousPageButtonHandler = ({ paginationParams }) => 
  async () => {
    const currentPage = paginationParams.pageValue
    const limitAdds = paginationParams.limitValue
    const isLastPage = currentPage <= 1
    if (!isLastPage) {
      await indexController({ queryParams : { pageValue: currentPage - 1, limitValue: limitAdds }, paginationOptions: { pagButtonText: showAllButtonText } })
    } else {
      await indexController({ queryParams : { pageValue: currentPage, limitValue: limitAdds }, paginationOptions: { pagButtonText: showAllButtonText, prevPageButtonIsLastPage: isLastPage } })
    }
}
