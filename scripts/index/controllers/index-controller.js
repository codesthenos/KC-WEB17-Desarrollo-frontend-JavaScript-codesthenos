import { paginateButtonId } from '../lib/consts.js'
import { paginateButtonHandler } from '../lib/eventHandlers.js'
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
  }
}

/*
export const showPaginatedAdds = async () => {
  const target = document.getElementById(mainDivId)
  const addsInDOM = document.querySelector('ul')
  const [addsH2, paginatedAdds, paginateNav] = await Promise.all([addsHeading(), paginatedAddsView(), paginateNavView({ addsInDOM })])
  target.innerHTML = ''
  target.appendChild(addsH2)
  // only if dont have error we show pagination nav
  if (addsH2.textContent !== errorHeader) {
    target.appendChild(paginateNav)
  }
  target.appendChild(paginatedAdds)
}
*/