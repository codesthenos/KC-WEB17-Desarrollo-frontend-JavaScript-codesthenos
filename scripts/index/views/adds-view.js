import { addsHeading, addsList, addsPaginationButtons } from '../lib/adds-view-utils.js'

export const addsView = ({ adds, pagButtonText }) => {
  const addsDiv = document.createElement('div')
  const addsH2 = addsHeading()
  const addsPaginationNav = addsPaginationButtons({ pagButtonText })
  const addsUl = addsList({ adds })
    
  addsDiv.appendChild(addsH2)
  addsDiv.appendChild(addsPaginationNav)
  addsDiv.appendChild(addsUl)
  return addsDiv
}
