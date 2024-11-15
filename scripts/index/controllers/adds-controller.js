import { setMainBody } from "../lib/controllers-utils.js"
import { addsView } from "../views/adds-view.js"

export const addsController = ({ adds, pagButtonText, isLastPage }) => {
  const addsDiv = addsView({ adds, pagButtonText, isLastPage })
  setMainBody({ child: addsDiv })
}