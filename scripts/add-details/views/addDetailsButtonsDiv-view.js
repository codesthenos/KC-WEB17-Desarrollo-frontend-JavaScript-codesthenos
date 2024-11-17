import { deleteAddButtonId, deleteAddButtonText, updateAddButtonId, updateAddButtonText, buttonsDivClassName } from '../lib/consts.js'
import { addDetailButtonView } from './addDetailsButton-view.js'

export const addDetailButtonsDiv = () => {
  const addButtonsDiv = document.createElement('div')
  const deleteButton = addDetailButtonView({ buttonId: deleteAddButtonId, buttonText: deleteAddButtonText })
  const updateButton = addDetailButtonView({ buttonId: updateAddButtonId, buttonText: updateAddButtonText })
  addButtonsDiv.appendChild(updateButton)
  addButtonsDiv.appendChild(deleteButton)
  addButtonsDiv.classList.add(buttonsDivClassName)

  return addButtonsDiv
}