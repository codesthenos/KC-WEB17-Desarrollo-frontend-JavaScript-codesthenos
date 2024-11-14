import { showLoading, showAdds, showPaginatedAdds } from "./controller.js"

// load button handler
export const loadAddsButtonHandler = async () => {
  showLoading()
  await showAdds()
}
// paginate button handler
export const paginateButtonHandler = async () => {
  showLoading()
  await showPaginatedAdds()
}