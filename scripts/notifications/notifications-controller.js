import { errorNoti, loadingNoti, successNoti } from '../lib/consts.js'
import { errorView } from './views/error-view.js'
import { successView } from './views/success-view.js'

export const notificationsController = ({ element }) => {
  const showNotifications = ({ message, type }) => {
    if (type === errorNoti) {
      const errorDiv = errorView({ errorMessage: message })
      element.innerHTML = ''
      element.classList.remove(loadingNoti)
      element.classList.remove(successNoti)
      element.classList.add(errorNoti)
      element.appendChild(errorDiv)
    } else if (type === loadingNoti) {
      element.classList.remove(errorNoti)
      element.classList.remove(successNoti)
      element.classList.add(loadingNoti)
    } else if (type === successNoti) {
      const successDiv = successView({ successMessage: message })
      element.innerHTML = ''
      element.classList.remove(errorNoti)
      element.classList.remove(loadingNoti)
      element.classList.add(successNoti)
      element.appendChild(successDiv)
      setTimeout(() => {
        element.innerHTML = ''
      }, 4000)
    }
  }

  return { showNotifications }
}