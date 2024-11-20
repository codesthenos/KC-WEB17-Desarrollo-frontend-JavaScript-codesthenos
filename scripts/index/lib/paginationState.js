export const calculatePagState = ({ page, addsPerPage, pagButtonText }) => {
  const queryPagParams = { pageValue: page, limitValue: addsPerPage }
  const state = { queryParams: queryPagParams, paginationParams: { pagButtonText }}
  return state
}