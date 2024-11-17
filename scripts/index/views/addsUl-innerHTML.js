import { addIntoHTML } from '../lib/addLi-InnerHTML.js'

export const addListHTML = ({ adds }) => {
  const addsHTML = adds.map(addIntoHTML).join('\n')
  return addsHTML
}
