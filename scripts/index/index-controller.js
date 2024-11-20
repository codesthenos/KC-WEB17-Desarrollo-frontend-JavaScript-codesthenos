// pagination button ids
import { paginateButtonId, nextPageButtonId, previousPageButtonId, paginateButtonText, showAllButtonText, initialPage, addsPerPage } from './lib/consts.js'
// data model
import { addsModel } from './adds-model.js'
// loading, error, and success controllers
import { addsView } from './views/adds-view.js'
import { fireNotificationEvent } from '../lib/fire-notification-event.js'
import { errorNoti, loadingNoti, successMsg, successNoti } from '../lib/consts.js'
import { removeLoadingClassNames } from '../lib/removeLoadingClassNames.js'

export const indexController = async ({ element, notificationElement, state }) => {
  
  fireNotificationEvent({ element, type: loadingNoti, message: '' })
  try {
    const currentQueryParams = state.queryParams
    const currentPaginationParams = state.paginationParams

    const currentPage = currentQueryParams.pageValue
    const limitAdds = currentQueryParams.limitValue

    // In a future here he will use the current filters applied
    const countAddsQueryParams = {}
    
    const [response, response2] = await Promise.all([
      addsModel({ queryParams: currentQueryParams }),
      // to get the count of filtered but not paginated and calculate the last page
      addsModel({ queryParams: countAddsQueryParams })
    ])
    // In a future this can be a numberOfFilteredAdds
    const numberOfTotalAdds = response2.adds.length

    const pagButtonText = currentPaginationParams.pagButtonText
    const isLastPage = currentPage * limitAdds >= numberOfTotalAdds
    const isFirstPage = currentPage <= 1

    const currentViewState = { adds: response.adds, pagButtonText, isFirstPage, isLastPage }

    const addsDiv = addsView({ viewState: currentViewState })
    element.innerHTML = ''
    element.appendChild(addsDiv)
    // after adding the pagination buttons to the DOM, i add the listeners
    // PAGINATE/SHOW ALL button
    const paginateButton = document.getElementById(paginateButtonId)
    paginateButton.addEventListener('click', () => {
      if (pagButtonText === paginateButtonText) {
        const queryPagParams = { pageValue: initialPage, limitValue: addsPerPage }
        const state = { queryParams: queryPagParams, paginationParams: { pagButtonText: showAllButtonText } }
        indexController({ element, notificationElement, state })
      } else {
        const state = { queryParams: {}, paginationParams: { pagButtonText: paginateButtonText } }
        indexController({ element, notificationElement, state })
      }
    })
    // NEXT PAGE button
    const nextPageButton = document.getElementById(nextPageButtonId)
    if (nextPageButton) {
      nextPageButton.addEventListener('click', () => {
        const queryPagParams = { pageValue: currentPage + 1, limitValue: currentQueryParams.limitValue }
        const state = { queryParams: queryPagParams, paginationParams: { pagButtonText } }
        indexController({ element, notificationElement, state })
      })
    }
    // PREV PAGE button
    const previousPageButton = document.getElementById(previousPageButtonId)
    if (previousPageButton) {
      previousPageButton.addEventListener('click', () => {
        const queryPagParams = { pageValue: currentPage - 1, limitValue: currentQueryParams.limitValue }
        const state = { queryParams: queryPagParams, paginationParams: { pagButtonText }}
        indexController({ element, notificationElement, state })
      })
    }
    removeLoadingClassNames({ element: notificationElement })
    // I think i dont want to throw a 'loaded succesfully after loading the homepage, that why its commented
    // fireNotificationEvent({ element, type: successNoti, message: successMsg })
  } catch (error) {
    fireNotificationEvent({ element, type: errorNoti, message: error.message })
  }
}
