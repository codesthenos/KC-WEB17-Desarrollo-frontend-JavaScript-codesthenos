import { showAdds, showLoading } from './controller.js'
// load button
const loadAddsButtonId = 'load-adds-button-id'
const loadAddsButtonHandler = async () => {
  showLoading()
  await showAdds()
}
const loadAddsButton = document.getElementById(loadAddsButtonId)

loadAddsButton.addEventListener('click', loadAddsButtonHandler)
