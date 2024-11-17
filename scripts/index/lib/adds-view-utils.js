import { addsH2Text, addsH2ClassName, showAllButtonText } from "./consts.js"
import { createNextPageButton, createPaginationButton, createPreviousPageButton } from "./paginationNav-utils.js"

const addIntoHTML = (add) => {
  const addHTML = `
    <a href="/routes/add-details.html?id=${add.id}">
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
  addsH2.classList.add(addsH2ClassName)
  return addsH2
}
// Pagination nav
export const addsPaginationButtons = ({ pagButtonText, isLastPage, isFirstPage }) => {
  const paginationNav = document.createElement('nav')
  const paginationButton = createPaginationButton({ pagButtonText })
  if (pagButtonText === showAllButtonText) {
    const nextPageButton = createNextPageButton({ isLastPage })
    const previousPageButton = createPreviousPageButton({ isFirstPage })
    paginationNav.appendChild(previousPageButton)
    paginationNav.appendChild(paginationButton)
    paginationNav.appendChild(nextPageButton)
    return paginationNav
  } else {
    paginationNav.appendChild(paginationButton)
    return paginationNav
  }
}
