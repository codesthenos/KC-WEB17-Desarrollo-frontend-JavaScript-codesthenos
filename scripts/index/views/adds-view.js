import { addsHeading } from './addsH2-view.js'
import { addsPaginationButtons } from './addsPaginationNav-view.js'
import { addsList } from './addsUl-view.js'
import { nameFilterFormView } from './nameFilterForm-view.js'

export const addsView = ({ viewState }) => {
  const addsDiv = document.createElement('div')
  const addsH2 = addsHeading()
  const nameFilterForm = nameFilterFormView()
  const addsPaginationNav = addsPaginationButtons({ pagButtonText: viewState.pagButtonText, isLastPage: viewState.isLastPage, isFirstPage: viewState.isFirstPage })
  const addsUl = addsList({ adds: viewState.adds })
    
  addsDiv.appendChild(addsH2)
  addsDiv.appendChild(nameFilterForm)
  addsDiv.appendChild(addsPaginationNav)
  addsDiv.appendChild(addsUl)
  return addsDiv
}
