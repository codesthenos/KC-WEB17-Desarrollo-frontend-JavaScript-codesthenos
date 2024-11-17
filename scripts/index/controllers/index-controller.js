// pagination button ids
import { paginateButtonId, nextPageButtonId, previousPageButtonId, paginateButtonText } from '../lib/consts.js'
// pagination event handlers
import { paginateButtonHandler, nextPageButtonHandler, previousPageButtonHandler } from '../lib/eventHandlers.js'
// utils to calculate first and last page
import { calculateIsFirstPage, calculateIsLastPage } from '../lib/utils.js'
// data model
import { addsModel } from '../models/adds-model.js'
// loading, error, and success controllers
import { loadingController } from '../../loading/loading-controller.js'
import { errorController } from '../../error/error-controller.js'
import { addsController } from './adds-controller.js'

export const indexController = async (options = { queryParams: {}, paginationOptions: {} }) => {
  const queryParams = options.queryParams
  
  loadingController()
  
  const [response, response2] = await Promise.all([addsModel(queryParams), addsModel()])
  
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

    const paginateOptions = options.paginationOptions

    if (paginateOptions) {
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
}
