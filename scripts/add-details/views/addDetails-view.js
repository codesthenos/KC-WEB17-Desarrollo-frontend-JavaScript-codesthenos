import { addLiHTML } from '../../lib/addLi-InnerHTML.js'
import { addLiClassName } from '../../lib/consts.js'

export const addDetailsView = ({ add }) => {
  const finalView = document.createElement('article')
  const finalViewHTML = addLiHTML(add)
  finalView.innerHTML = finalViewHTML
  finalView.classList.add(addLiClassName)
  return finalView
}