import { buttonClassName } from '../../lib/consts.js'

export const nameFilterFormView = () => {
  const nameFilterForm = document.createElement('form')
  const nameLabel = document.createElement('label')
  const nameInput = document.createElement('input')
  const submitButton = document.createElement('button')
  const clearNameFilterAnchor = document.createElement('a')

  nameInput.setAttribute('type', 'text')
  nameInput.setAttribute('id', 'name')
  nameInput.setAttribute('name', 'name')
  nameInput.setAttribute('required', true)

  nameLabel.setAttribute('for', 'name')
  nameLabel.textContent = 'Name'

  submitButton.setAttribute('type', 'submit')
  submitButton.setAttribute('id', 'name-filter-button')
  submitButton.classList.add(buttonClassName)
  submitButton.textContent = 'FILTER'

  clearNameFilterAnchor.setAttribute('href', '/')
  clearNameFilterAnchor.classList.add(buttonClassName)
  clearNameFilterAnchor.textContent = 'CLEAR FILTER'

  nameFilterForm.setAttribute('id', 'name-filter-form')
  nameFilterForm.appendChild(nameInput)
  nameFilterForm.appendChild(nameLabel)
  nameFilterForm.appendChild(submitButton)
  nameFilterForm.appendChild(clearNameFilterAnchor)

  return nameFilterForm
}