import { paginateButtonId, nextPageButtonId, previousPageButtonId } from '../lib/consts.js'
import { paginateButtonHandler, nextPageButtonHandler, previousPageButtonHandler } from '../lib/eventHandlers.js'
import { addsModel } from '../models/adds-model.js'
import { addsController } from './adds-controller.js'
import { errorController } from './error-controller.js'
import { loadingController } from './loading-controller.js'

export const indexController = async (options = { queryParams: {}, paginationOptions: {} }) => {
  const queryParams = options.queryParams
  const paginateOptions = options.paginationOptions
  const pagButtonText =  paginateOptions ? paginateOptions.pagButtonText : undefined
  const nextPageButtonIsLastPage = paginateOptions ? paginateOptions.nextPageButtonIsLastPage : undefined
  const prevPageButtonIsLastPage = paginateOptions ? paginateOptions.prevPageButtonIsLastPage : undefined
  loadingController()
  const [response, response2] = await Promise.all([addsModel(queryParams), addsModel()])

  if (response.error || response2.error) {
    errorController({ errorMessage: response.error })
  } else {
    const numberOfTotalAdds = response2.adds.length // In a future this will be a numberOfFilteredAdds
    addsController({ adds: response.adds, pagButtonText, nextPageButtonIsLastPage, prevPageButtonIsLastPage })
    // pagination events
    const paginateButton = document.getElementById(paginateButtonId)
    paginateButton.addEventListener('click', paginateButtonHandler)
    // TODO
    const nextPageButton = document.getElementById(nextPageButtonId)
    if (nextPageButton) {
      nextPageButton.addEventListener('click', nextPageButtonHandler({ paginationParams: queryParams }, numberOfTotalAdds))
    }
    const previousPageButton = document.getElementById(previousPageButtonId)
    if (previousPageButton) {
      previousPageButton.addEventListener('click', previousPageButtonHandler({ paginationParams: queryParams }))
    }
  }
}
