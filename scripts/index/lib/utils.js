export const calculateIsLastPage = ({ currentPage, limitAdds, numberOfTotalAdds }) => {
  return currentPage * limitAdds >= numberOfTotalAdds
}
export const calculateIsFirstPage = ({ currentPage }) => {
  return currentPage <= 1
}