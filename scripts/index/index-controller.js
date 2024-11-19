// pagination button ids
import { paginateButtonId, nextPageButtonId, previousPageButtonId, paginateButtonText } from './lib/consts.js'
// pagination event handlers
import { paginateButtonHandler, nextPageButtonHandler, previousPageButtonHandler } from './lib/eventHandlers.js'
// utils to calculate first and last page
import { calculateIsFirstPage, calculateIsLastPage } from './lib/utils.js'
// data model
import { addsModel } from './adds-model.js'
// loading, error, and success controllers
import { addsView } from './views/adds-view.js'
import { fireNotificationEvent } from '../lib/fire-notification-event.js'
import { errorNoti, loadingNoti, successMsg, successNoti } from '../lib/consts.js'

export const indexController = async ({ element, state }) => {
  
  fireNotificationEvent({ element, type: loadingNoti, message: '' })
  try {
    const currentQueryParams = state.queryParams
    const currentPaginationParams = state.paginationParams
    // In a future here he will use the current filters applied
    const countAddsQueryParams = {}

    const [response, response2] = await Promise.all([
      addsModel({ queryParams: currentQueryParams }),
      addsModel({ queryParams: countAddsQueryParams })
    ])

    const currentViewState = { adds: response.adds }

    const addsDiv = addsView({ viewState: currentViewState })
    element.innerHTML = ''
    element.appendChild(addsDiv)
    fireNotificationEvent({ element, type: successNoti, message: successMsg })
  } catch (error) {
    fireNotificationEvent({ element, type: errorNoti, message: error.message })
  }

  /*
  if (response.adds && response2.adds) {
    // In a future this will be a numberOfFilteredAdds
    const numberOfTotalAdds = response2.adds.length

    let pagButtonText = paginateButtonText
    let isLastPage = undefined
    let isFirstPage = undefined

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
  } else {
    errorController({ errorMessage: response.error })
  }
  */
}
