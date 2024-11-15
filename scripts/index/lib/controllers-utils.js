import { mainDivId } from "./lib.js"

export const mainDivBody = ({ child }) => {
  const target = document.getElementById(mainDivId)
  target.innerHTML = ''
  target.appendChild(child)
}