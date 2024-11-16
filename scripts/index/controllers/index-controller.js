import { paginateButtonId, nextPageButtonId, previousPageButtonId, paginateButtonText } from '../lib/consts.js'
import { paginateButtonHandler, nextPageButtonHandler, previousPageButtonHandler } from '../lib/eventHandlers.js'
import { calculateIsFirstPage, calculateIsLastPage } from '../lib/utils.js'
import { addsModel } from '../models/adds-model.js'
import { addsController } from './adds-controller.js'
import { errorController } from './error-controller.js'
import { loadingController } from './loading-controller.js'

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
