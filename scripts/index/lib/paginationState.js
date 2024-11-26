export const calculatePagState = ({ page, addsPerPage, likeKey, likeValue, pagButtonText }) => {
  const queryPagParams = { pageValue: page, limitValue: addsPerPage, likeKey, likeValue }
  const state = { queryParams: queryPagParams, paginationParams: { pagButtonText }}
  return state
}