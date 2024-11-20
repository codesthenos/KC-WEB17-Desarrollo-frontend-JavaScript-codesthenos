import { notiDiv, notificationEventName } from '../lib/consts.js'
import { notificationsController } from '../notifications/notifications-controller.js'
import { indexController } from './index-controller.js'

document.addEventListener('DOMContentLoaded', () => {
  const indexMain = document.querySelector('main')
  const notificationsDiv = document.getElementById(notiDiv)

  const initialState = {
    queryParams: {
      pageValue: null,
      limitValue: null
    },
    paginationParams: {
      pagButtonText: null,
      isFirstPage: null,
      isLastPage: null
    }
  }
  
  const { showNotifications } = notificationsController({ element: notificationsDiv })
  
  indexMain.addEventListener(notificationEventName, event => {
    showNotifications({ message: event.detail.message, type: event.detail.type })
  })

  indexController({ element: indexMain, notificationElement: notificationsDiv, state: initialState })


})
