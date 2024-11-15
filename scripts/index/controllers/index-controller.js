import { paginateButtonId, nextPageButtonId, previousPageButtonId } from '../lib/consts.js'
import { paginateButtonHandler, nextPageButtonHandler, previousPageButtonHandler } from '../lib/eventHandlers.js'
import { addsModel } from '../models/adds-model.js'
import { addsController } from './adds-controller.js'
import { errorController } from './error-controller.js'
import { loadingController } from './loading-controller.js'

export const indexController = async (options = { queryParams: {}, pagButtonText }) => {
  loadingController()
  const response = await addsModel(options.queryParams)
  if (response.error) {
    errorController({ errorMessage: response.error })
  } else {
    addsController({ adds: response.adds, pagButtonText: options.pagButtonText })
    // pagination events
    const paginateButton = document.getElementById(paginateButtonId)
    paginateButton.addEventListener('click', paginateButtonHandler)
    // TODO
    const nextPageButton = document.getElementById(nextPageButtonId)
    if (nextPageButton) {
      nextPageButton.addEventListener('click', nextPageButtonHandler({ paginationParams: options.queryParams }))
    }
    const previousPageButton = document.getElementById(previousPageButtonId)
    if (previousPageButton) {
      previousPageButton.addEventListener('click', previousPageButtonHandler({ paginationParams: options.queryParams }))
    }
  }
}
