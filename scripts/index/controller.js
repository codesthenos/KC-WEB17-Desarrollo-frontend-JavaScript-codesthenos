import { addsHeading, addsView } from './view.js'

export const showAdds = () => {
  const targetId = 'adds-list'
  const target = document.getElementById(targetId)
  const addsH2 = addsHeading()
  const adds = addsView()
  target.innerHTML = ''
  target.appendChild(addsH2)
  target.appendChild(adds)
}