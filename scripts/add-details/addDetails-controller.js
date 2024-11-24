import { addDetailsModel } from './addDetails-model.js'
import { authAddDetailsView, publicAddDetailView } from './views/addDetails-view.js'
import { fireNotificationEvent } from '../lib/fire-notification-event.js'
import { errorNoti, loadingNoti } from '../lib/consts.js'
import { removeLoadingClassNames } from '../lib/removeLoadingClassNames.js'
import { isUserLoggedOwner } from '../lib/auth-utils.js'

export const addDetailsController = async ({ element, notificationElement, addId }) => {
  if (!addId) {
    window.location.href = '/'
  }

  fireNotificationEvent({ element, type: loadingNoti })

  try {
    const response = await addDetailsModel({ addId })
    const add = response.add
    
    let addDetailDiv = null

    if (await isUserLoggedOwner({ element, add })) {
      addDetailDiv = authAddDetailsView({ add })
      // add listeners to auth buttons
    } else {
      addDetailDiv = publicAddDetailView({ add })
    }

    element.innerHTML = ''
    element.appendChild(addDetailDiv)
    removeLoadingClassNames({ element: notificationElement })
  } catch (error) {
    fireNotificationEvent({ element, type: errorNoti, errorList: [error.message]})
  }
}