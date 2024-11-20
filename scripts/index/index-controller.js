// pagination button ids
import { paginateButtonId, nextPageButtonId, previousPageButtonId, paginateButtonText } from './lib/consts.js'
// pagination event handlers
import { paginateButtonHandler, nextPageButtonHandler, previousPageButtonHandler } from './lib/eventHandlers.js'
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
    removeLoadingClassNames({ element: notificationElement })
    // I think i dont want to throw a 'loaded succesfully after loading the homepage, that why its commented
    // fireNotificationEvent({ element, type: successNoti, message: successMsg })
  } catch (error) {
    fireNotificationEvent({ element, type: errorNoti, message: error.message })
  }

  /*
  if (queryParams) {
    const currentPage = queryParams.pageValue
    const limitAdds = queryParams.limitValue
    isLastPage = calculateIsLastPage({ currentPage, limitAdds, numberOfTotalAdds })
    isFirstPage = calculateIsFirstPage({ currentPage })
  }

  const paginateOptions = state.paginationOptions

  if (paginateOptions && paginateOptions.pagButtonText) {
    pagButtonText = paginateOptions.pagButtonText
  }

  const initialState = { adds: response.adds, pagButtonText, isLastPage, isFirstPage }

  addsController({ state: initialState })

  const paginateButton = document.getElementById(paginateButtonId)
  paginateButton.addEventListener('click', paginateButtonHandler({ paginationParams: { pagButtonText } }))

  const nextPageButton = document.getElementById(nextPageButtonId)
  if (nextPageButton) {
    nextPageButton.addEventListener('click', nextPageButtonHandler({ queryParams }))
  }
  const previousPageButton = document.getElementById(previousPageButtonId)
  if (previousPageButton) {
    previousPageButton.addEventListener('click', previousPageButtonHandler({ queryParams }))
  }
  */
}
