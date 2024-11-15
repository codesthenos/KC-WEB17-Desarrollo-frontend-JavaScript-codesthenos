import { addsModel } from "../models/adds-model.js"

export const errorView = async (queryParams = {}) => {
  const response = await addsModel(queryParams)
  const errorH2 = document.createElement('h2')
  errorH2.textContent = response.error
  errorH2.classList.add('error-h2')
  return errorH2
}