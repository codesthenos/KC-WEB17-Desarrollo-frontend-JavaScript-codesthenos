import { addListHTML } from './addsUl-innerHTML.js'

export const addsList = ({ adds }) => {
  const addsUl = document.createElement('ul')
  addsUl.innerHTML = addListHTML({ adds })
  return addsUl
}