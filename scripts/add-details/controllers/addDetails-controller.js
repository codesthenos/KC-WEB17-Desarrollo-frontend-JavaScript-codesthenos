// import { loadingController } from '../../loading/loading-controller.js'
import { addDetailsModel } from '../models/addDetails-model.js'
import { errorController } from '../../error/error-controller.js'
import { addController } from './add-controller.js'

export const addDetailsController = () => {
  const data = addDetailsModel()
  if (data.error) {
    errorController({ errorMessage: data.error })
  } else if (data.add) {
    addController({ add: data.add })
  }
  /* This was to test the reusability of the loading, but this web doesnt fetch yet anything but will do probably
  loadingController()
  setTimeout(() => {
    const data = addDetailsModel()
    if (data.error) {
      errorController({ errorMessage: data.error })
    } else if (data.add) {
      addController({ add: data.add })
    }
  }, 1000)
  */
}