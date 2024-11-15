import { loadingClassName } from "../lib/consts.js"

export const loadingView = () => {
  const loadingDiv = document.createElement('div')
  loadingDiv.classList.add(loadingClassName)
  return loadingDiv
}