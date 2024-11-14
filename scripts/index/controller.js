import { addsHeading, addsView, loadingView, paginateNavView, paginatedAddsView } from './view.js'

export const showLoading = () => {
  const targetId = 'adds-list'
  const target = document.getElementById(targetId)
  const loadingDiv = loadingView()
  target.innerHTML = ''
  target.appendChild(loadingDiv)
}

export const showAdds = async () => {
  const targetId = 'adds-list'
  const target = document.getElementById(targetId)
  const paginateNav = paginateNavView()
  const [addsH2, adds] = await Promise.all([addsHeading(), addsView()])
  target.innerHTML = ''
  target.appendChild(addsH2)
  if (addsH2.textContent !== 'ERROR') {
    target.appendChild(paginateNav)
  }
  target.appendChild(adds)
}

export const showPaginatedAdds = async () => {
  const targetId = 'adds-list'
  const target = document.getElementById(targetId)
  const paginateNav = paginateNavView()
  const [addsH2, paginatedAdds, adds] = await Promise.all([addsHeading(), paginatedAddsView(), addsView()])
  target.innerHTML = ''
  target.appendChild(addsH2)
  // only if dont have error we show pagination nav
  if (addsH2.textContent !== 'ERROR') {
    target.appendChild(paginateNav)
    // get DOM adds length to manage pagination
    const paginatedAddsLength = paginatedAdds.childElementCount
    // get number of ALL adds for pagination too
    const allAddsLength = adds.childElementCount
    // get the pagination button
    const paginationButton = paginateNav.querySelector('button') // will change this when add more buttons to the nav pagination
    paginationButton.textContent = allAddsLength > paginatedAddsLength ? 'SHOW ALL' : 'PAGINATE'
  }
  target.appendChild(paginatedAdds)
}