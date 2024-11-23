import { errorNoti, loadingNoti } from '../lib/consts.js'
import { fireNotificationEvent } from '../lib/fire-notification-event.js'

export const loginController = ({ element, notificationElement }) => {
  fireNotificationEvent({ element, type: loadingNoti })

  
}