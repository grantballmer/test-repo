import React from "react"
import "./scss/band.scss"

import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const bandTemplate = ({ data }) => {
  console.log(data)
  const { frontmatter } = data.markdownRemark

  return (
    <section className="profile-container">
      <div className="profile-hero-wrapper">
        <div className="svg-container svg-container__profile">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="0,94 100,98 100,100 0,100" />
          </svg>
        </div>
      </div>
      <h1>{frontmatter.name}</h1>
      <h2>{frontmatter.genre}</h2>
      <div dangerouslySetInnerHTML={{ __html: frontmatter.bio }}></div>
    </section>
    // <section className="profile-container">
    //   <div className="profile-hero-wrapper">
    //     <div className="svg-container svg-container__profile">
    //       <svg
    //         width="100%"
    //         height="100%"
    //         viewBox="0 0 100 100"
    //         preserveAspectRatio="none"
    //       >
    //         <polygon points="0,94 100,98 100,100 0,100" />
    //       </svg>
    //     </div>

    //     <BackgroundImage
    //       className={`profile-hero profile-hero__${path}`}
    //       fluid={banner.childImageSharp.fluid}
    //       alt={name}
    //     >
    //       <h2>{name}</h2>
    //     </BackgroundImage>
    //   </div>

    //   <div className="profile-about">
    //     <div className="profile-about__info">
    //       <h3>{name}</h3>
    //       <h4>{genre}</h4>
    //       {bio}
    //       {/* <p>{bio}</p> */}
    //     </div>

    //     <SocialMedia info={{ spotify, youtube, itunes, facebook, instagram }} />
    //   </div>

    //   <div className="profile-contact">
    //     <div className="svg-container svg-container__profile svg-container__contact">
    //       <svg
    //         width="100%"
    //         height="100%"
    //         viewBox="0 0 100 100"
    //         preserveAspectRatio="none"
    //       >
    //         <polygon points="0,0 100,0 100,12 0,4" />
    //       </svg>
    //     </div>
    //     <h4>Contact Info</h4>

    //     <div className="profile-contact__details">{managementDivs}</div>
    //     <div />
    //   </div>
    // </section>
  )
}

// import Layout from "../components/layout"
// import SocialMedia from "../components/bands/SocialMedia"

// const BandTemplate = ({ data }) => {
//   const {
//     name,
//     genre,
//     bio,
//     management,
//     social_media_links,
//     banner,
//     slug,
//   } = data.strapiBand
//   const { spotify, youtube, itunes, facebook, instagram } = social_media_links

//   const managementDivs = management.map(person => {
//     const { position, name, email } = person
//     return (
//       <div key={`${name + position}`} className="contact-information">
//         <h5>
//           {position}: <span>{name}</span>
//         </h5>
//         <a
//           className="contact-information__email"
//           href={`mailto:${email}`}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <i className="fas fa-envelope" />
//           <p>{email}</p>
//         </a>
//       </div>
//     )
//   })

//   return <Layout></Layout>
// }

export default bandTemplate

export const bandQuery = graphql`
  query BandPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        path
        templateKey
        name
        genre
        bio
        thumbnail
        banner
      }
    }
  }
`
