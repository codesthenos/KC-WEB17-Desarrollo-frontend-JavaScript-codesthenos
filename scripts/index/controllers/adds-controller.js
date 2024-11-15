import { mainDivBody } from "../lib/controllers-utils.js"
import { addsView } from "../views/adds-view.js"

export const addListController = async () => {
  const adds = await addsView()
  mainDivBody({ child: adds })
}