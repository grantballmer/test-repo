import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./artist.scss"

class Artist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
    }
  }

  handleClick = () => {
    if (window.innerWidth > 812) return
    const { clicked } = this.state
    this.setState({ clicked: !clicked })
  }

  render() {
    const { name, slideFunc, image } = this.props
    const { clicked } = this.state

    const touchClass = clicked ? "screenTouchClass" : ""

    const varName = name.split(" ")[0].toLowerCase()
    const linkParam = name
      .toLowerCase()
      .replace(/\s/g, "-")
      .replace("&", "and")

    return (
      <div
        className={`box artist__${varName} ${touchClass}`}
        onClick={this.handleClick}
      >
        <div className="overlay-background-image">
          <Img fluid={image} style={{ position: "static" }} />
        </div>
        <Link to={`/roster/${linkParam}`} className="btn btn-profile">
          Profile
        </Link>
        <p className="box__name">{name}</p>
        <div className="btn btn-booking" onClick={slideFunc} data-artist={name}>
          Book Artist
        </div>
      </div>
    )
  }
}

export default Artist
