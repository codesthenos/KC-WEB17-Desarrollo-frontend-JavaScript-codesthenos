import { addDetailsModel } from '../models/addDetails-model.js'
import { loadingController } from '../../loading/loading-controller.js'
import { errorController } from '../../error/error-controller.js'
import { addController } from './add-controller.js'

export const addDetailsController = () => {
  loadingController()
  setTimeout(() => {
    const data = addDetailsModel()
    if (data.error) {
      errorController({ errorMessage: data.error })
    } else if (data.add) {
      addController({ add: data.add })
    }
  }, 1000)
}