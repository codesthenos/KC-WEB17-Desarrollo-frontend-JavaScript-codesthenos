import { notiDiv, notificationEventName } from '../lib/consts.js'
import { removeLoadingClassNames } from '../lib/removeLoadingClassNames.js'
import { notificationsController } from '../notifications/notifications-controller.js'
import { addDetailsController } from './addDetails-controller.js'

document.addEventListener('DOMContentLoaded', () => {
  const addDetailsMain = document.querySelector('main')
  const notificationsDiv = document.getElementById(notiDiv)

  removeLoadingClassNames({ element: notificationsDiv })

  const { showNotifications } = notificationsController({ element: notificationsDiv })

  addDetailsMain.addEventListener(notificationEventName, event => {
    showNotifications({ errorList: event.detail.errorList, message: event.detail.message, type: event.detail.type })
  })

  addDetailsController({ element: addDetailsMain, notificationElement: notificationsDiv })
})