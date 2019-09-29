import React from "react"
import { graphql } from "gatsby"

import "../scss/box.scss"
import Layout from "../components/Layout"
import Card from "../components/services/Card"

import Camera from "../icons/camera.svg"
import Pencil from "../icons/pencil.svg"
import Phone from "../icons/phone.svg"

const Services = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <section className="box-container">
        <Card
          frontImage={data.photography.childImageSharp.fluid}
          icon={Camera}
          service="photography"
        />

        <Card
          frontImage={data.design.childImageSharp.fluid}
          icon={Pencil}
          service="design"
        />

        <Card
          frontImage={data.management.childImageSharp.fluid}
          icon={Phone}
          service="management"
        />
      </section>
    </Layout>
  )
}

export default Services

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const servicesImages = graphql`
  query {
    photography: file(relativePath: { eq: "services/MMJ.jpg" }) {
      ...fluidImage
    }
    design: file(relativePath: { eq: "services/abram-album.jpg" }) {
      ...fluidImage
    }
    management: file(relativePath: { eq: "services/management.jpg" }) {
      ...fluidImage
    }
  }
`
