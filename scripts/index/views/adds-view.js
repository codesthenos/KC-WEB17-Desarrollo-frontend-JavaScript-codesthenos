import { addsHeading, addsList } from '../lib/adds-view-utils.js'

export const addsView = ({ adds }) => {
  const addsDiv = document.createElement('div')
  const addsH2 = addsHeading()
  const addsUl = addsList({ adds })
    
  addsDiv.appendChild(addsH2)
  addsDiv.appendChild(addsUl)
  return addsDiv
}
/* review
export const paginatedAddsView = async () => {
  const queryParams = { pageValue: initialPage, limitValue: addsPerPage }
  return await addsView(queryParams)
}

export const paginateNavView = async ({ addsInDOM }) => {
  // crear un navbar con 3 botones, paginar/no paginar, next page, previous page

  const paginationNav = document.createElement('nav')

  const paginationButton = document.createElement('button')
  paginationButton.setAttribute('id', paginateButtonId)
  paginationButton.classList.add('btn')
  // get these ones to calculate the paginate/show all button textContent
  const adds = await fetchAdds()
  if (!addsInDOM) {
    paginationButton.textContent = paginateButtonText
  } else {
    console.log(addsInDOM.childElementCount)
    const addsInDOMLength = addsInDOM.childElementCount
  
    const allAddsLength = adds.length
  
    const isPaginated = allAddsLength > addsInDOMLength
  
    paginationButton.textContent = isPaginated ? showAllButtonText : paginateButtonText
  }

  paginationButton.addEventListener('click', paginateButtonHandler)

  paginationNav.appendChild(paginationButton)

  return paginationNav
}

// ?????
export const nextPageView = async () => {
  return await addsView({ pageValue: pageValue + 1, limitValue })
}
*/