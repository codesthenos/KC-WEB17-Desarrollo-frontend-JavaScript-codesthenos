import { addDetailsModel } from '../add-details/addDetails-model.js'
import { isUserLoggedOwner } from '../lib/auth-utils.js'
import { errorNoti, loadingNoti } from '../lib/consts.js'
import { fireNotificationEvent } from '../lib/fire-notification-event.js'
import { setUpdateAddInputValues } from './utils.js'

export const updateAddController = async ({ element, addId }) => {
  if (!addId) {
    element.innerHTML = ''
    fireNotificationEvent({ element, type: errorNoti, errorList: ['No id provided'] })
    setTimeout(() => {
      window.location.href = '/'
    }, 1000)
  }

  //fireNotificationEvent({ element, type: loadingNoti })

  try {
    const response = await addDetailsModel({ addId })
    const add = response.add

    if (!await isUserLoggedOwner({ element, add })) {
      element.innerHTML = ''
      fireNotificationEvent({ element, type: errorNoti, errorList: ['UNAUTHORIZED user logged is not the owner'] })
      setTimeout(() => {
        window.location.href = '/'
      }, 1000)
    } else {
      setUpdateAddInputValues({
        addName: add.name,
        addPrice: add.price,
        addImage: add.image,
        addDescription: add.description,
        addFor: add.for
      })
    }
    
  } catch (error) {
    fireNotificationEvent({ element, type: errorNoti, errorList: [error.message]})
  }
}