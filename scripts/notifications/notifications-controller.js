import { errorClassName, errorNoti, loadingNoti, successClassName, successNoti } from '../lib/consts.js'
import { setNotification } from '../lib/setNotification.js'
import { notificationView } from './notification-view.js'

export const notificationsController = ({ element }) => {
  const showNotifications = ({ message, type }) => {
    if (type === errorNoti) {
      const errorH2 = notificationView({ notificationMessage: message, notificationClassName: errorClassName })

      setNotification({
        notification: element,
        removeClassName1: loadingNoti,
        removeClassName2: successNoti,
        addClassName: errorNoti
      })

      element.appendChild(errorH2)
    } else if (type === loadingNoti) {
      setNotification({
        notification: element,
        removeClassName1: errorNoti,
        removeClassName2: successNoti,
        addClassName: loadingNoti
      })
    } else if (type === successNoti) {
      const successH2 = notificationView({ notificationMessage: message, notificationClassName: successClassName })

      setNotification({
        notification: element,
        removeClassName1: loadingNoti,
        removeClassName2: errorNoti,
        addClassName: successNoti
      })

      element.appendChild(successH2)
      // clearing success nati after 2000ms
      setTimeout(() => {
        element.innerHTML = ''
        element.classList.remove(successNoti)
        element.classList.remove('notifications-div')
      }, 2000)
    }
  }

  return { showNotifications }
}