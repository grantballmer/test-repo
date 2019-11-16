import React from "react"
import "../../scss/preview.scss"
import { GalleryPageTemplate } from "../../templates/gallery"

const GalleryPagePreview = ({ entry, widgetsFor }) => {
  const info = entry.getIn(["data"]).toJS()
  console.log(info)

  return <GalleryPageTemplate info={info} />
}

export default GalleryPagePreview
