import { notiDiv, notificationEventName } from '../lib/consts.js'
import { notificationsController } from '../notifications/notifications-controller.js'
import { addDetailsController } from './addDetails-controller.js'

document.addEventListener('DOMContentLoaded', () => {
  const addDetailsMain = document.querySelector('main')
  const notificationsDiv = document.getElementById(notiDiv)

  const { showNotifications } = notificationsController({ element: notificationsDiv })

  addDetailsMain.addEventListener(notificationEventName, event => {
    showNotifications({ message: event.detail.message, type: event.detail.type })
  })

  addDetailsController({ element: addDetailsMain, notificationElement: notificationsDiv })
})