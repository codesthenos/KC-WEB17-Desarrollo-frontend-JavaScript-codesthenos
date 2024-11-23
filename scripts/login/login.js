import { isUserLogged } from '../lib/auth-utils.js'
import { notiDiv, notificationEventName } from '../lib/consts.js'
import { removeLoadingClassNames } from '../lib/removeLoadingClassNames.js'
import { notificationsController } from '../notifications/notifications-controller.js'
import { loginController } from './login-controller.js'

document.addEventListener('DOMContentLoaded', () => {
  if (isUserLogged()) {
    window.location.href = '/'
  }

  const loginMain = document.querySelector('main')
  const notificationsDiv = document.getElementById(notiDiv)

  removeLoadingClassNames({ element: notificationsDiv })

  const { showNotifications } = notificationsController({ element: notificationsDiv })

  loginMain.addEventListener(notificationEventName, (event) => {
    showNotifications({ errorList: event.detail.errorList, message: event.detail.message, type: event.detail.type })
  })

  loginController({ element: loginMain })
})