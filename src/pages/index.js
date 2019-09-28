import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "../scss/index.scss"
import concert from "../images/concert.jpg"
import POME from "../images/pome-logo.png"
import Layout from "../components/Layout"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <React.Fragment>
        <section className="hero-wrapper">
          <div className="svg-container">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="0,94 100,98 100,100 0,100" />
            </svg>
          </div>
          <BackgroundImage
            className={`hero`}
            fluid={data.hero.childImageSharp.fluid}
            alt="concert photo at night"
          ></BackgroundImage>
        </section>

        <div className="home-about">
          <h1>
            Purchase Productions is a one stop shop for your band management,
            booking, design, and photography needs based out of Muskegon, MI.
          </h1>
          <Link to="/about" className="btn btn-link">
            ABOUT US
          </Link>
        </div>

        <section className="home-booking-wrapper">
          <div className="svg-container svg-container__booking">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="0,0 100,0 100,12 0,4" />
            </svg>
          </div>
          <div
            className="home-booking"
            style={{ backgroundImage: `url(${concert}` }}
          >
            <div className="home-booking__section">
              <Link to="/contact">Book With Us</Link>
              <p>Interested in one of our live bands?</p>
              <p>Contact us and book your next event.</p>
            </div>
            <div className="home-booking__section home-booking__ambassador">
              <img src={POME} alt="POME logo" />
              <div>
                <h2>Brand Ambassador</h2>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    </Layout>
  )
}

export default IndexPage

export const homeHeroImage = graphql`
  query {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
