// import { loadingController } from '../../loading/loading-controller.js'
import { addDetailsModel } from '../models/addDetails-model.js'
import { loadingController } from '../../loading/loading-controller.js'
import { errorController } from '../../error/error-controller.js'
import { addController } from './add-controller.js'

export const addDetailsController = async () => {

  loadingController()

  const response = await addDetailsModel()

  if (response.error) {
    errorController({ errorMessage: response.error })
  } else if (response.add) {
    addController({ add: response.add })
  }
}