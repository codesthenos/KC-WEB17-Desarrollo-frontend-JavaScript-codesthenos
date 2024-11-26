export const calculateFiltersState = ({ inputId, pageValue, limitValue, pagButtonText }) => {
  const input = document.getElementById(inputId)
  const value = input.value

  const queryParamsFilteredState = { pageValue, limitValue, likeKey: inputId, likeValue: value }
  const filteredState = { queryParams: queryParamsFilteredState, paginationParams: { pagButtonText } }

  return filteredState
}