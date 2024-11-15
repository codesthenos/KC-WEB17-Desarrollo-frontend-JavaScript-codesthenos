import { setMainBody } from "../lib/controllers-utils.js"
import { addsView } from "../views/adds-view.js"

export const addsController = ({ adds, pagButtonText, nextPageButtonIsLastPage, prevPageButtonIsLastPage }) => {
  const addsDiv = addsView({ adds, pagButtonText, nextPageButtonIsLastPage, prevPageButtonIsLastPage })
  setMainBody({ child: addsDiv })
}