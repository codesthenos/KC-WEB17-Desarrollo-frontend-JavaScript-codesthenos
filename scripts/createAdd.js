import { notiDiv } from './lib/consts.js'
import { removeLoadingClassNames } from './lib/removeLoadingClassNames.js'
import { isUserLogged } from './lib/auth-utils.js'
import { notificationsController } from './notifications/notifications-controller.js'
import { sessionNavController } from './sessionNav/sessionNav-controller.js'

document.addEventListener('DOMContentLoaded', () => {
  if (!isUserLogged()) {
    window.location.href = '/'
  }

  const createAddMain = document.querySelector('main')
  const notificationsDiv = document.getElementById(notiDiv)

  const { setSessionNav } = sessionNavController({ element: createAddMain })

  setSessionNav({
    homeButtonClass: 'shown',
    createAddButtonClass: '_',
    registerButtonClass: '_',
    loginButtonClass: '_',
    logoutButtonClass: 'shown'
  })

  const { showNotifications } = notificationsController({ element: notificationsDiv })

  removeLoadingClassNames({ element: notificationsDiv })
})