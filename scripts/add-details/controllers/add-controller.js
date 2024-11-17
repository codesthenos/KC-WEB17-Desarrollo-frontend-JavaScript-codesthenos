import { setMainBody } from '../../lib/controllers-utils.js'
import { addDetailsView } from '../views/addDetails-view.js'

export const addController = () => {
  const addDetailDiv = addDetailsView()
  setMainBody({ child: addDetailDiv })
}