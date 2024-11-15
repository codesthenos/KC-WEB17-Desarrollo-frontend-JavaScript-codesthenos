import { mainDivBody } from "../lib/controllers-utils.js"
import { errorView } from "../views/error-view.js"

export const errorController = ({ errorMessage }) => {
  const errorH2 = errorView({ errorMessage })
  mainDivBody({ child: errorH2 })
}