export const headerController = () => {
  const setHeader = ({ homeButtonClass, createAddButtonClass, registerButtonClass, loginButtonClass }) => {
    const homeButton = document.getElementById('home-button')
    const createAddButton = document.getElementById('create-add-button')
    const registerButton = document.getElementById('register-button')
    const loginButton = document.getElementById('login-button')

    homeButton.classList.add(homeButtonClass)
    createAddButton.classList.add(createAddButtonClass)
    registerButton.classList.add(registerButtonClass)
    loginButton.classList.add(loginButtonClass)
  }

  return { setHeader }
}