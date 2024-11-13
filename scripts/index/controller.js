import { addsView } from './view.js'

export const showAdds = () => {
  const targetId = 'adds-list'
  const target = document.getElementById(targetId)
  const adds = addsView()
  target.appendChild(adds)
}