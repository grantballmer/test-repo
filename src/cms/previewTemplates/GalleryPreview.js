import React from "react"
import { GalleryPageTemplate } from "../../templates/gallery"

const GalleryPagePreview = ({ entry, widgetsFor }) => {
  const info = entry.getIn(["data"]).toJS()

  return <GalleryPageTemplate info={info} />
}

export default GalleryPagePreview
