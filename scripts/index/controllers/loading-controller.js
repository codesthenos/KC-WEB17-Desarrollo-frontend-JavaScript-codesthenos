import { mainDivBody } from "../lib/controllers-utils.js"
import { loadingView } from "../views/loading-view.js"

export const loadingController = () => {
  const loadingDiv = loadingView()
  mainDivBody({ child: loadingDiv })
}