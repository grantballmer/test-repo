import CMS from "netlify-cms-app"
import GalleryPagePreview from "./previewTemplates/GalleryPreview"
import BandPagePreview from "./previewTemplates/BandPreview"

CMS.init()

CMS.registerPreviewTemplate("gallery", GalleryPagePreview)
CMS.registerPreviewTemplate("band", BandPagePreview)
