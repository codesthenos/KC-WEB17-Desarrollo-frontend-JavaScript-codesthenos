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
  target.appendChild(paginateNav)
  target.appendChild(adds)
}

export const showPaginatedAdds = async () => {
  const targetId = 'adds-list'
  const target = document.getElementById(targetId)
  const paginateNav = paginateNavView()
  const [addsH2, paginatedAdds] = await Promise.all([addsHeading(), paginatedAddsView()])
  target.innerHTML = ''
  target.appendChild(addsH2)
  target.appendChild(paginateNav)
  target.appendChild(paginatedAdds)
}