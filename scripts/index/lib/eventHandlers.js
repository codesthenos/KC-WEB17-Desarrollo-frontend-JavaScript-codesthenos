import { indexController } from '../controllers/index-controller.js'
import { addsPerPage, initialPage, paginateButtonText, showAllButtonText } from './consts.js'
import { calculateIsFirstPage, calculateIsLastPage } from './utils.js'

// paginate button handler
export const paginateButtonHandler = ({ paginationParams }) =>
  async () => {
  const queryParams = { pageValue: initialPage, limitValue: addsPerPage }
  const pagButtonText = paginationParams.pagButtonText

  if (pagButtonText === paginateButtonText) {
    await indexController({ queryParams, paginationOptions: { pagButtonText: showAllButtonText } })
  } else {
    await indexController({ paginationOptions: { pagButtonText: paginateButtonText } })
  }
}
// nextPage button handler
export const nextPageButtonHandler = ({ queryParams }) =>
  async () => {
    const currentPage = queryParams.pageValue
    const limitAdds = queryParams.limitValue

    await indexController({ queryParams : { pageValue: currentPage + 1, limitValue: limitAdds }, paginationOptions: { pagButtonText: showAllButtonText } })
}
// previousPage button handler
export const previousPageButtonHandler = ({ queryParams }) => 
  async () => {
    const currentPage = queryParams.pageValue
    const limitAdds = queryParams.limitValue

    await indexController({ queryParams : { pageValue: currentPage - 1, limitValue: limitAdds }, paginationOptions: { pagButtonText: showAllButtonText } })
}
