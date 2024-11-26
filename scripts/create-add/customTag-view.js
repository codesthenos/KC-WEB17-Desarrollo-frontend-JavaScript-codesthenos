export const customTagDivView = ({ tagValue }) => {
  const customTagDiv = document.createElement('div')
  const customTagInput = document.createElement('input')
  const customTagLabel = document.createElement('label')

  customTagInput.setAttribute('type', 'checkbox')
  customTagInput.setAttribute('id', tagValue)
  customTagInput.setAttribute('name', tagValue)

  customTagLabel.setAttribute('for', tagValue)
  customTagLabel.textContent = tagValue

  customTagDiv.appendChild(customTagInput)
  customTagDiv.appendChild(customTagLabel)
  customTagDiv.classList.add('tag-div')
  customTagDiv.setAttribute('id', `${tagValue}-div-id`)

  return tagValue ? customTagDiv : null
}