export const calculateFiltersState = ({ inputId, pageValue, limitValue, pagButtonText }) => {
  const input = document.getElementById(inputId)
  let value = input.value.toLowerCase()

  if (inputId === 'tags') {
    value = value.replace(/\s+/g, '-')
  }

  const queryParamsFilteredState = { pageValue, limitValue, likeKey: inputId, likeValue: value }
  const filteredState = { queryParams: queryParamsFilteredState, paginationParams: { pagButtonText } }

  return filteredState
}