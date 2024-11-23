export const headerController = () => {
  const setHeader = ({ homeButtonClass, createAddButtonClass, registerButtonClass, loginButtonClass, logoutButtonClass }) => {
    const homeButton = document.getElementById('home-button')
    const createAddButton = document.getElementById('create-add-button')
    const registerButton = document.getElementById('register-button')
    const loginButton = document.getElementById('login-button')
    const logoutButton = document.getElementById('logout-button')

    homeButton.classList.add(homeButtonClass)
    createAddButton.classList.add(createAddButtonClass)
    registerButton.classList.add(registerButtonClass)
    loginButton.classList.add(loginButtonClass)
    logoutButton.classList.add(logoutButtonClass)
  }

  return { setHeader }
}