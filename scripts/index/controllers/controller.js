import { addListController } from './adds-controller.js'
import { errorController } from './error-controller.js'
import { loadingController } from './loading-controller.js'

export const indexController = () => {
  loadingController()
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