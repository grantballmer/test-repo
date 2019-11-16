import React from "react"
// import "../../scss/preview.scss"
import { BandTemplate } from "../../templates/bandTemplate"

const BandPagePreview = ({ entry, widgetsFor }) => {
  const info = entry.getIn(["data"]).toJS()
  console.log(info)

  return <BandTemplate info={info} />
}

export default BandPagePreview
