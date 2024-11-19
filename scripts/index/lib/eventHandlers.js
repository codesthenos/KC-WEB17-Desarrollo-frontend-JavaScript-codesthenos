import { indexController } from '../index-controller.js'
import { addsPerPage, initialPage, paginateButtonText, showAllButtonText } from './consts.js'

// paginate button handler
export const paginateButtonHandler = ({ paginationParams }) =>
  () => {
  const queryParams = { pageValue: initialPage, limitValue: addsPerPage }
  const pagButtonText = paginationParams.pagButtonText

  if (pagButtonText === paginateButtonText) {
    const state = { queryParams, paginationOptions: { pagButtonText: showAllButtonText } }
    indexController({ state })
  } else {
    const state = { paginationOptions: { pagButtonText: paginateButtonText } }
    indexController({ state })
  }
}
// nextPage button handler
export const nextPageButtonHandler = ({ queryParams }) =>
  () => {
    const currentPage = queryParams.pageValue
    const limitAdds = queryParams.limitValue

    const state = { queryParams : { pageValue: currentPage + 1, limitValue: limitAdds }, paginationOptions: { pagButtonText: showAllButtonText } }
    indexController({ state })
}
// previousPage button handler
export const previousPageButtonHandler = ({ queryParams }) => 
  () => {
    const currentPage = queryParams.pageValue
    const limitAdds = queryParams.limitValue

    const state = { queryParams : { pageValue: currentPage - 1, limitValue: limitAdds }, paginationOptions: { pagButtonText: showAllButtonText } }
    indexController({ state })
}
