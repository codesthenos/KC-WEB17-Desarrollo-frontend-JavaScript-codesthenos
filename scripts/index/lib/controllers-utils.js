import { mainId } from "./consts.js"

export const setMainBody = ({ child }) => {
  const target = document.getElementById(mainId)
  target.innerHTML = ''
  target.appendChild(child)
}