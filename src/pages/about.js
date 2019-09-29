import React from "react"
import "../scss/about.scss"
import ReactDOM from "react-dom"
import { FaAngleDoubleDown } from "react-icons/fa"

import Nate from "../images/about/nate.jpg"
import Eric from "../images/about/eric.jpg"
import Isaac from "../images/about/isaac.jpg"

import Layout from "../components/Layout"

class About extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  scrollToDomRef = ref => {
    const myDomNode = ReactDOM.findDOMNode(this.myRef.current)
    // myDomNode.scrollIntoView({ behavior: 'smooth' });
    const offset = myDomNode.offsetTop - 92
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    })
  }

  render() {
    return (
      <Layout>
        <div className="about">
          <div className="info-wrapper">
            <div className="info">
              <h1>Purchase Productions</h1>
              <div className="info__desc">
                <p>
                  Purchase Productions was founded in 2018 by Nathan Purchase
                  with a mission to aid local and regional artists in spreading
                  their music and art across the country. With over 10 years of
                  experience in the music industry, Purchase has put together a
                  team based out of Michigan with services that include
                  management, tour management, booking, professional
                  photography, and graphic design.
                </p>

                <p>
                  Purchase Productions takes pride in a commitment and
                  dedication to the local arts community while staying focused
                  and determined to breaking artists onto the national scene.
                </p>

                <p>
                  Our current official roster consists of Desmond Jones, Jesse
                  Ray & the Carolina Catfish, and Chirp. In the past we've had
                  the pleasure of working with Desmond Jones, Jesse Ray & the
                  Carolina Catfish, Chirp, Conrad Shock & the Noise, House With
                  a Yard, Earth Radio, Isaac Berkowitz, and The Hacky Turtles.
                </p>
              </div>
            </div>

            <FaAngleDoubleDown
              className="arrow-down"
              onClick={this.scrollToDomRef}
            />
          </div>

          <div className="personal" ref={this.myRef}>
            <h1 className="personal__header">Who We Are</h1>

            <div className="details">
              <div className="details__image">
                <img src={Nate} alt="nate" />
              </div>

              <div className="details__desc">
                <h1>Nathan Purchase</h1>
                <p>
                  After graduating from Michigan State University with a degree
                  in photography, Purchase took his love for music and art to a
                  professional level, managing a local band, booking shows with
                  Shakespeare's Lower Level in Kalamazoo, MI, and starting his
                  own business; Nathan Purchase Photography.
                </p>

                <p>
                  His hands-on experience comes from years of hard work and
                  grinding as a manager, photographer, and artist. In 2018,
                  after years of tour managing Desmond Jones, and shooting
                  hundreds of concerts for a variety of publications and bands,
                  he started Purchase Productions in order to push the
                  boundaries of his own dreams and goals for the music scene.
                  When he’s not on the road or sending emails you can find him
                  playing pickup basketball or smashing chicken wings.
                </p>
              </div>
            </div>

            <div className="details">
              <div className="details__desc details__desc--reverse">
                <h1>Eric Frutchey</h1>
                <p>
                  Eric Frutchey is a die-hard music fan, radio personality, and
                  booking agent sending Chirp (Ann Arbor) all over the Midwest.
                  Frutchey is excited to be a part of this team and is ready to
                  work hard for his clients.
                </p>
              </div>

              <div className="details__image details__image--reverse">
                <img src={Eric} alt="eric" />
              </div>
            </div>

            <div className="details">
              <div className="details__image">
                <img src={Isaac} alt="nate" />
              </div>

              <div className="details__desc">
                <h1>Isaac Berkowitz</h1>
                <p>
                  Guitarist and co-founder of the band Desmond Jones, Berkowitz
                  has brought his knowledge and skills of booking and touring to
                  Purchase Productions. Booking hundreds of shows for his own
                  band, he is now ready to help upcoming local bands book their
                  own tours on a tour by tour basis. He learned by doing and now
                  he’s ready to help. Want to get out of your hometown and get
                  on the road? Let’s talk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About
