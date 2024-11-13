import { showPaginatedAdds, showAdds, showLoading } from './controller.js'

// load button
const loadAddsButtonId = 'load-adds-button-id'
export const loadAddsButton = document.getElementById(loadAddsButtonId)
// load button handler
export const loadAddsButtonHandler = async () => {
  showLoading()
  await showAdds()
}
// paginate button handler
export const paginateButtonHandler = async () => {
  await showPaginatedAdds()
}