export const calculatePagState = ({ page, addsPerPage, likeValue, pagButtonText }) => {
  const queryPagParams = { pageValue: page, limitValue: addsPerPage, likeValue }
  const state = { queryParams: queryPagParams, paginationParams: { pagButtonText }}
  return state
}