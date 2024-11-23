import { headerController } from '../sessionNav/sessionNav-controller.js'
import { isUserLogged } from '../lib/auth-utils.js'
import { notiDiv, notificationEventName } from '../lib/consts.js'
import { removeLoadingClassNames } from '../lib/removeLoadingClassNames.js'
import { notificationsController } from '../notifications/notifications-controller.js'
import { addDetailsController } from './addDetails-controller.js'

document.addEventListener('DOMContentLoaded', () => {
  const addDetailsMain = document.querySelector('main')
  const notificationsDiv = document.getElementById(notiDiv)

  const { setHeader } = headerController({ element: addDetailsMain })

  if (isUserLogged()) {
    setHeader({
      homeButtonClass: 'shown',
      createAddButtonClass: 'shown',
      registerButtonClass: '_',
      loginButtonClass: '_',
      logoutButtonClass: 'shown'
    })
  } else {
    setHeader({
      homeButtonClass: 'shown',
      createAddButtonClass: '_',
      registerButtonClass: 'shown',
      loginButtonClass: 'shown',
      logoutButtonClass: '_'
    })
  }

  removeLoadingClassNames({ element: notificationsDiv })

  const { showNotifications } = notificationsController({ element: notificationsDiv })

  addDetailsMain.addEventListener(notificationEventName, event => {
    showNotifications({ errorList: event.detail.errorList, message: event.detail.message, type: event.detail.type })
  })

  addDetailsController({ element: addDetailsMain, notificationElement: notificationsDiv })
})