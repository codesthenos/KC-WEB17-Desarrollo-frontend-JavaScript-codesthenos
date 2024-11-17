import { errorView } from '../error/error-view.js'
import { addDetailsModel } from './models/addDetails-model.js'

const data = addDetailsModel()
const main = document.getElementById('add-details')
if (data.error) {
  main.appendChild(errorView({ errorMessage: data.error }))
} else if (data.add) {
  main.appendChild(errorView({ errorMessage: `Add id: ${data.add.id}` }))
}