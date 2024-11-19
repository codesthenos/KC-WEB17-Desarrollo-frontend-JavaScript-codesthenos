import { notificationEventName } from './consts.js'

export const fireNotificationEvent = ({ element, type, message }) => {
  const notificationEvent = new CustomEvent(notificationEventName, {
    detail: {
      message,
      type
    }
  })
  element.dispatchEvent(notificationEvent)
}