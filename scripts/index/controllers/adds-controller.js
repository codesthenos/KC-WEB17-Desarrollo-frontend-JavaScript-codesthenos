import { setMainBody } from "../lib/controllers-utils.js"
import { addsView } from "../views/adds-view.js"

export const addsController = ({ state }) => {
  const addsDiv = addsView({ state })
  setMainBody({ child: addsDiv })
}