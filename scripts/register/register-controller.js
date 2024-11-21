import { removeLoadingClassNames } from '../lib/removeLoadingClassNames.js'
import { fireNotificationEvent } from '../lib/fire-notification-event.js'
import { errorNoti } from '../lib/consts.js'

export const loginController = ({ element, notificationElement }) => {
  removeLoadingClassNames({ element: notificationElement })
  try {
    
  } catch (error) {
    fireNotificationEvent({ element, type: errorNoti, message: error.message })
  }
}