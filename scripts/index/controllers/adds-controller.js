import { mainDivBody } from "../lib/controllers-utils.js"
import { addsView } from "../views/adds-view.js"

export const addListController = ({ adds }) => {
  const addsDiv = addsView({ adds })
  mainDivBody({ child: addsDiv })
}