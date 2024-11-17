import { buttonDescDivClassName } from '../lib/consts.js'
import { addDetailCardView } from './addDetailsCard-view.js'
import { addDetailButtonsDiv } from './addDetailsButtonsDiv-view.js'
import { addDetailDescView } from './addDetailsDesc-view.js'

export const addDetailsView = ({ add }) => {
  const addArticle = document.createElement('article')
  const buttonsDescDiv = document.createElement('div')

  const addDiv = addDetailCardView(add)
  const addButtonsDiv = addDetailButtonsDiv(add)
  const descriptionDiv = addDetailDescView(add)

  buttonsDescDiv.appendChild(addButtonsDiv)
  buttonsDescDiv.appendChild(descriptionDiv)
  buttonsDescDiv.classList.add(buttonDescDivClassName)

  addArticle.appendChild(addDiv)
  addArticle.appendChild(buttonsDescDiv)

  return addArticle
}