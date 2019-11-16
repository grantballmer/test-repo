import CMS from "netlify-cms-app"
import GalleryPagePreview from "./previewTemplates/GalleryPreview"

CMS.init()

CMS.registerPreviewTemplate("gallery", GalleryPagePreview)
