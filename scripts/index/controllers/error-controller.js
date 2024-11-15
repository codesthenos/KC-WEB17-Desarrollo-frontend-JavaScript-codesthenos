import { mainDivBody } from "../lib/controllers-utils.js"
import { errorView } from "../views/error-view.js"

export const errorController = async () => {
  const errorH2 = await errorView()
  mainDivBody({ child: errorH2 })
}