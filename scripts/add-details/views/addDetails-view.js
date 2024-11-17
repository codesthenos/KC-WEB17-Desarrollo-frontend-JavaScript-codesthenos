import { addLiHTML } from '../../lib/addLi-InnerHTML.js'
import { addLiClassName, divDescriptionClassName } from '../../lib/consts.js'
export const descriptionPHTML = add => {
  return `
  <h3>DESCRIPTION</h3>
  <p>${add.description}</p>
  `
}
export const addDetailsView = ({ add }) => {
  const addArticle = document.createElement('article')
  // div add card
  const addDiv = document.createElement('div')
  const addDivHTML = addLiHTML(add)
  addDiv.innerHTML = addDivHTML
  addDiv.classList.add(addLiClassName)
  // description
  const descriptionDiv = document.createElement('div')
  const descDivHTML = descriptionPHTML(add)
  descriptionDiv.innerHTML = descDivHTML
  descriptionDiv.classList.add(divDescriptionClassName)

  addArticle.appendChild(addDiv)
  addArticle.appendChild(descriptionDiv)
  return addArticle
}