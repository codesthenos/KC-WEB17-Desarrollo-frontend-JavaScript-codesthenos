import { addsHeading, addsView, loadingView } from './view.js'

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
  const addsH2 = await addsHeading()
  const adds = await addsView()
  target.innerHTML = ''
  target.appendChild(addsH2)
  target.appendChild(adds)
}