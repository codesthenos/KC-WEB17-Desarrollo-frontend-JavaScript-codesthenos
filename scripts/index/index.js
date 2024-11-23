import { headerController } from '../header/header-controller.js'
import { isUserLogged } from '../lib/auth-utils.js'
import { notiDiv, notificationEventName } from '../lib/consts.js'
import { removeLoadingClassNames } from '../lib/removeLoadingClassNames.js'
import { notificationsController } from '../notifications/notifications-controller.js'
import { indexController } from './index-controller.js'
import { paginateButtonText } from './lib/consts.js'

document.addEventListener('DOMContentLoaded', () => {
  const indexMain = document.querySelector('main')
  const notificationsDiv = document.getElementById(notiDiv)

  const { setHeader } = headerController()

  if (isUserLogged()) {
    setHeader({ homeButtonClass: '_', createAddButtonClass: 'shown', registerButtonClass: '_', loginButtonClass: '_' })
  } else {
    setHeader({ homeButtonClass: '_', createAddButtonClass: '_', registerButtonClass: 'shown', loginButtonClass: 'shown' })
  }

  removeLoadingClassNames({ element: notificationsDiv })

  const initialState = {
    queryParams: {
      pageValue: null,
      limitValue: null
    },
    paginationParams: {
      pagButtonText: paginateButtonText
    }
  }
  
  const { showNotifications } = notificationsController({ element: notificationsDiv })
  
  indexMain.addEventListener(notificationEventName, event => {
    showNotifications({ errorList: event.detail.errorList, message: event.detail.message, type: event.detail.type })
  })
  // pass to the index the notification element remove the loading classNames
  indexController({ element: indexMain, notificationElement: notificationsDiv, state: initialState })

})
