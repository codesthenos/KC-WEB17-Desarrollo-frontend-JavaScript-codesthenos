import { setMainBody } from "../lib/controllers-utils.js"
import { addsView } from "../views/adds-view.js"

export const addsController = ({ adds, pagButtonText }) => {
  const addsDiv = addsView({ adds, pagButtonText })
  setMainBody({ child: addsDiv })
}