import React from "react"
import { graphql } from "gatsby"
import "../scss/box.scss"

import Layout from "../components/Layout"
import SideBooking from "../components/roster/SideBooking"
import Loading from "../components/contact/Loading"
import Success from "../components/contact/Success"
import Error from "../components/contact/Error"

import Artist from "../components/roster/Artist"

class Roster extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showOverlay: false,
      currentArtist: "",
      formWaiting: false,
      success: false,
      error: false,
    }
  }

  slideFunc = e => {
    const { showOverlay } = this.state
    const currentArtist = e.currentTarget.dataset.artist || ""

    // if (showOverlay) {
    //   document.body.style.position = 'fixed';
    // }

    this.setState({
      currentArtist,
      showOverlay: !showOverlay,
    })
  }

  formWaitingScreen = () => {
    this.setState({ formWaiting: true })
  }

  formSuccessScreen = () => {
    this.setState({ success: true, formWaiting: false })
  }

  formErrorScreen = () => {
    this.setState({ error: true, formWaiting: false })
  }

  render() {
    console.log(this.props)
    const {
      showOverlay,
      currentArtist,
      formWaiting,
      success,
      error,
    } = this.state
    const slideClass = showOverlay ? "slide" : ""
    const noScrollClass = showOverlay ? "noScroll" : ""

    const { edges } = this.props.data.allMarkdownRemark
    console.log(edges)
    const chirp = edges[0].node.frontmatter.thumbnail
    const desmond = edges[1].node.frontmatter.thumbnail
    const jesse = edges[2].node.frontmatter.thumbnail

    // const { chirp, desmond, jesse } = this.props.data

    return (
      <Layout>
        {formWaiting && <Loading />} {/* render Loading component */}
        {/* Check if form has been submitted, if it has, render success or error component; if not, render form component */}
        {success || error ? (
          success ? (
            <Success />
          ) : (
            <Error />
          )
        ) : (
          <React.Fragment>
            <div
              className={`overlay overlay-color ${slideClass}`}
              onClick={this.slideFunc}
            />
            <SideBooking
              slideClass={slideClass}
              currentArtist={currentArtist}
              slideFunc={this.slideFunc}
              formFuncs={{
                formWaitingScreen: this.formWaitingScreen,
                formSuccessScreen: this.formSuccessScreen,
                formErrorScreen: this.formWaitingScreen,
              }}
            />
            <section className={`box-container ${noScrollClass}`}>
              <Artist
                name="Desmond Jones"
                image={desmond.childImageSharp.fluid}
                slideFunc={this.slideFunc}
              />
              <Artist
                name="Jesse Ray & The Carolina Catfish"
                image={jesse.childImageSharp.fluid}
                slideFunc={this.slideFunc}
              />
              <Artist
                name="Chirp"
                image={chirp.childImageSharp.fluid}
                slideFunc={this.slideFunc}
              />
            </section>
          </React.Fragment>
        )}
      </Layout>
    )
  }
}

export default Roster

export const servicesImages = graphql`
  query ArtistsThumbnails {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "bandTemplate" } } }
    ) {
      edges {
        node {
          frontmatter {
            name
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
