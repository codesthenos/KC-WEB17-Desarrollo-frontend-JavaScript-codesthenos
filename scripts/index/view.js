import { fetchAdds } from './model.js'
import { addsHeader, errorHeader, paginateButtonId, paginateButtonText } from './lib.js'
import { paginateButtonHandler } from './eventHandlers.js'

export const loadingView = () => {
  const loadingDiv = document.createElement('div')
  loadingDiv.classList.add('loading')
  return loadingDiv
}


export const addsView = async (queryParams = {}) => {
  const response = await fetchAdds(queryParams)

  if (response.adds) {
    const addsUlInnerHTML = response.adds.map(add => `
      <a href="/routes/ad-details.html">
        <li>
          <img src="${add.image}" alt="${add.description}" />
          <h3>${add.name}</h3>
          <p><span>Description:</span></p>
          <p>${add.description}</p>
          <p><span>Price:</span> ${add.price}€</p>
          <p><span>For:</span> ${add.for}</p>
        </li>
      </a>
      `).join('\n')
      
        const addsUl = document.createElement('ul')
        addsUl.innerHTML = addsUlInnerHTML
        return addsUl
  }
  if (response.error) {
    const errorView = `${response.error}`
    const errorPre = document.createElement('pre')
    errorPre.textContent = errorView
    return errorPre
  }
}

export const addsHeading = async () => {
  const response = await fetchAdds()
  let addsH2Text = addsHeader
  const addsH2 = document.createElement('h2')
  if (response.error) {
    addsH2Text = errorHeader
    addsH2.classList.add('error-h2')
  }
  addsH2.textContent = addsH2Text
  return addsH2
}

export const paginateNavView = () => {
  // crear un navbar con 3 botones, paginar/no paginar, next page, previous page

  const paginationNav = document.createElement('nav')

  const paginationButton = document.createElement('button')
  paginationButton.setAttribute('id', paginateButtonId)
  paginationButton.classList.add('btn')
  paginationButton.textContent = paginateButtonText

  paginationButton.addEventListener('click', paginateButtonHandler)

  paginationNav.appendChild(paginationButton)

  return paginationNav
}

export const paginatedAddsView = async () => {
  const queryParams = { pageValue: 1, limitValue: 1 }
  return await addsView(queryParams)
}
