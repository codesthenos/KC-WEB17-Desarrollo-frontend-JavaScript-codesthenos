import { errorNoti, loadingNoti } from '../lib/consts.js'
import { loadingView } from './views/loading-view.js'
import { errorView } from './views/error-view.js'
import { successView } from './views/success-view.js'

export const notificationsController = ({ element }) => {
  const showNotifications = ({ message, type }) => {
    if (type === errorNoti) {
      const errorDiv = errorView({ errorMessage: message })
      element.innerHTML = ''
      element.appendChild(errorDiv)
    } else if (type === loadingNoti) {
      const loadingDiv = loadingView()
      element.innerHTML = ''
      element.appendChild(loadingDiv)
    } else {
      const successDiv = successView({ successMessage: message })
      element.innerHTML = ''
      element.appendChild(successDiv)
      setTimeout(() => {
        element.innerHTML = ''
      }, 4000)
    }
  }

  return { showNotifications }
}