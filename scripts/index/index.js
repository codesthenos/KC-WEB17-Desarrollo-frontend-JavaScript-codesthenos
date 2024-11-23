import { sessionNavController } from '../sessionNav/sessionNav-controller.js'
import { isUserLogged } from '../lib/auth-utils.js'
import { notiDiv, notificationEventName } from '../lib/consts.js'
import { removeLoadingClassNames } from '../lib/removeLoadingClassNames.js'
import { notificationsController } from '../notifications/notifications-controller.js'
import { indexController } from './index-controller.js'
import { paginateButtonText } from './lib/consts.js'

document.addEventListener('DOMContentLoaded', () => {
  const indexMain = document.querySelector('main')
  const notificationsDiv = document.getElementById(notiDiv)

  const { setSessionNav } = sessionNavController({ element: indexMain })

  if (isUserLogged()) {
    setSessionNav({
      homeButtonClass: '_',
      createAddButtonClass: 'shown',
      registerButtonClass: '_',
      loginButtonClass: '_',
      logoutButtonClass: 'shown'
    })
  } else {
    setSessionNav({
      homeButtonClass: '_',
      createAddButtonClass: '_',
      registerButtonClass: 'shown',
      loginButtonClass: 'shown',
      logoutButtonClass: '_'
    })
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
