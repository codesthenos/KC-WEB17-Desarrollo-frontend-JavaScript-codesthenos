import { addDetailCardView } from './addDetailsCard-view.js'
import { addDetailDescView } from './addDetailsDesc-view.js'

export const addDetailsView = ({ add }) => {
  const addArticle = document.createElement('article')
  const addDiv = addDetailCardView(add)
  const descriptionDiv = addDetailDescView(add)

  addArticle.appendChild(addDiv)
  addArticle.appendChild(descriptionDiv)
  return addArticle
}