import { addDetailsModel } from './addDetails-model.js'
import { addDetailsView } from './views/addDetails-view.js'
import { fireNotificationEvent } from '../lib/fire-notification-event.js'
import { errorNoti, loadingNoti } from '../lib/consts.js'
import { removeLoadingClassNames } from '../lib/removeLoadingClassNames.js'

export const addDetailsController = async ({ element, notificationElement }) => {

  fireNotificationEvent({ element, type: loadingNoti, message: '' })

  try {
    const response = await addDetailsModel()
    const addDetailDiv = addDetailsView({ add: response.add })
    element.innerHTML = ''
    element.appendChild(addDetailDiv)
    removeLoadingClassNames({ element: notificationElement })
  } catch (error) {
    fireNotificationEvent({ element, type: errorNoti, message: error.message})
  }
}