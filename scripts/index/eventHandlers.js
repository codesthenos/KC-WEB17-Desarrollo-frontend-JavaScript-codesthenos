import { showLoading, showAdds, showPaginatedAdds } from './controller.js'
import { paginateButtonId, showAllButtonText } from './lib.js'

// load button handler
export const loadAddsButtonHandler = async () => {
  showLoading()
  await showAdds()
}
// paginate button handler
export const paginateButtonHandler = async () => {
  const paginationButton = document.getElementById(paginateButtonId)
  showLoading()
  paginationButton.textContent === showAllButtonText ? await showAdds() : await showPaginatedAdds()
}

// nextPage button handler
export const nextPageButtonHandler = async () => {
  
}
// previousPage button handler