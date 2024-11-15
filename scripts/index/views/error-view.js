export const errorView = ({ errorMessage }) => {
  const errorH2 = document.createElement('h2')
  errorH2.textContent = errorMessage
  errorH2.classList.add('error-h2')
  return errorH2
}