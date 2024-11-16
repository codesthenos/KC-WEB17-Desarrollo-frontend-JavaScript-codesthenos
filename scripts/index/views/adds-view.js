import { addsHeading, addsList, addsPaginationButtons } from '../lib/adds-view-utils.js'

export const addsView = ({ state }) => {
  const addsDiv = document.createElement('div')
  const addsH2 = addsHeading()
  const addsPaginationNav = addsPaginationButtons({ pagButtonText: state.pagButtonText, isLastPage: state.isLastPage, isFirstPage: state.isFirstPage })
  const addsUl = addsList({ adds: state.adds })
    
  addsDiv.appendChild(addsH2)
  addsDiv.appendChild(addsPaginationNav)
  addsDiv.appendChild(addsUl)
  return addsDiv
}
