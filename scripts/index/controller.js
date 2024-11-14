import { errorHeader, mainDivId, paginateButtonId, paginateButtonText, showAllButtonText } from './lib.js'
import { addsHeading, addsView, loadingView, paginateNavView, paginatedAddsView } from './view.js'

export const showLoading = () => {
  const targetId = mainDivId
  const target = document.getElementById(targetId)
  const loadingDiv = loadingView()
  target.innerHTML = ''
  target.appendChild(loadingDiv)
}

export const showAdds = async () => {
  const targetId = mainDivId
  const target = document.getElementById(targetId)
  const paginateNav = paginateNavView()
  const [addsH2, adds] = await Promise.all([addsHeading(), addsView()])
  target.innerHTML = ''
  target.appendChild(addsH2)
  if (addsH2.textContent !== errorHeader) {
    target.appendChild(paginateNav)
  }
  target.appendChild(adds)
}

export const showPaginatedAdds = async () => {
  const targetId = mainDivId
  const target = document.getElementById(targetId)
  const paginateNav = paginateNavView()
  const [addsH2, paginatedAdds, adds] = await Promise.all([addsHeading(), paginatedAddsView(), addsView()])
  target.innerHTML = ''
  target.appendChild(addsH2)
  // only if dont have error we show pagination nav
  if (addsH2.textContent !== errorHeader) {
    target.appendChild(paginateNav)
    // get DOM adds length to manage pagination
    const paginatedAddsLength = paginatedAdds.childElementCount
    // get number of ALL adds for pagination too
    const allAddsLength = adds.childElementCount
    // get the pagination button
    console.log(paginateNav)
    const paginationButton = document.getElementById(paginateButtonId)
    paginationButton.textContent = allAddsLength > paginatedAddsLength ? showAllButtonText : paginateButtonText
  }
  target.appendChild(paginatedAdds)
}