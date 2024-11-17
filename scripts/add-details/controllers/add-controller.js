import { setMainBody } from '../../lib/controllers-utils.js'
import { addDetailsView } from '../views/addDetails-view.js'

export const addController = ({ add }) => {
  const addDetailDiv = addDetailsView({ add })
  setMainBody({ child: addDetailDiv })
}