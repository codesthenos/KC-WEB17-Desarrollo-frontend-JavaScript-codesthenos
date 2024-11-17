import { setMainBody } from '../lib/controllers-utils.js'
import { errorView } from './error-view.js'

export const errorController = ({ errorMessage }) => {
  const errorH2 = errorView({ errorMessage })
  setMainBody({ child: errorH2 })
}