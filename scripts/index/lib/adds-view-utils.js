import { addsH2Text, showAllButtonText } from "./consts.js"
import { createNextPageButton, createPaginationButton, createPreviousPageButton } from "./paginationNav-utils.js"

const addIntoHTML = add => {
  const addHTML = `
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
    `
    return addHTML
}

const addListHTML = ({ adds }) => {
  const addsHTML = adds.map(addIntoHTML).join('\n')
  return addsHTML
}

export const addsList = ({ adds }) => {
  const addsUl = document.createElement('ul')
  addsUl.innerHTML = addListHTML({ adds })
  return addsUl
}

export const addsHeading = () => {
  const addsH2 = document.createElement('h2')
  addsH2.textContent = addsH2Text
  return addsH2
}
// Pagination nav
export const addsPaginationButtons = ({ pagButtonText }) => {
  const paginationNav = document.createElement('nav')
  const paginationButton = createPaginationButton({ pagButtonText })
  if (pagButtonText === showAllButtonText) {
    paginationNav.appendChild(paginationButton)
    return paginationNav
  } else {
    const nextPageButton = createNextPageButton()
    const previousPageButton = createPreviousPageButton()
    paginationNav.appendChild(previousPageButton)
    paginationNav.appendChild(paginationButton)
    paginationNav.appendChild(nextPageButton)
    return paginationNav
  }
}
