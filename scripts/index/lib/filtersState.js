export const calculateFiltersState = ({ inputId, pageValue, limitValue, pagButtonText }) => {
  const tagsInput = document.getElementById(inputId)
  const tags = tagsInput.value

  const queryParamsFilteredState = { pageValue, limitValue, likeKey: inputId, likeValue: tags }
  const filteredState = { queryParams: queryParamsFilteredState, paginationParams: { pagButtonText } }

  return filteredState
}