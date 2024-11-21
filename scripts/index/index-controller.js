// pagination button ids
import { paginateButtonId, nextPageButtonId, previousPageButtonId, paginateButtonText, showAllButtonText, initialPage, addsPerPage } from './lib/consts.js'
// pag state
import { calculatePagState } from './lib/paginationState.js'
// data model
import { addsModel } from './adds-model.js'
// loading, error, and success controllers
import { addsView } from './views/adds-view.js'
import { fireNotificationEvent } from '../lib/fire-notification-event.js'
import { errorNoti, loadingNoti } from '../lib/consts.js'
import { removeLoadingClassNames } from '../lib/removeLoadingClassNames.js'

export const indexController = async ({ element, notificationElement, state }) => {
  
  try {
    const currentQueryParams = state.queryParams
    const currentPaginationParams = state.paginationParams

    const currentPage = currentQueryParams.pageValue
    const limitAdds = currentQueryParams.limitValue

    // In a future here he will use the current filters applied
    const countAddsQueryParams = { pageValue: null, limitValue: null }
    
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
        const state = calculatePagState({ page: initialPage, addsPerPage, pagButtonText: showAllButtonText })
        indexController({ element, notificationElement, state })
      } else {
        const state = calculatePagState({ page: null, addsPerPage: null, pagButtonText: paginateButtonText })
        indexController({ element, notificationElement, state })
      }
    })
    // NEXT PAGE button
    const nextPageButton = document.getElementById(nextPageButtonId)
    if (nextPageButton) {
      nextPageButton.addEventListener('click', () => {
        const state = calculatePagState({ page: currentPage + 1, addsPerPage: currentQueryParams.limitValue, pagButtonText })

        indexController({ element, notificationElement, state })
      })
    }
    // PREV PAGE button
    const previousPageButton = document.getElementById(previousPageButtonId)
    if (previousPageButton) {
      previousPageButton.addEventListener('click', () => {
        const state = calculatePagState({ page: currentPage - 1, addsPerPage: currentQueryParams.limitValue, pagButtonText })

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
