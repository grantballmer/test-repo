import React from "react";
import Img from "gatsby-image";
import "./photoGrid.scss";
import SliderOverlay from "./SliderOverlay";
// const imagePath = process.env.PUBLIC_URL + '/assets/images/design';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      activePhoto: null
    };
  }

  componentDidMount() {
    this.setState({ images: this.props.images, title: this.props.title });
  }

  handleClick = e => {
    const { clicked } = this.state;
    document.body.style.overflow = "hidden";

    this.setState({ clicked: !clicked, activePhoto: e.currentTarget });
  };

  handleTouchMove = e => {
    const { clicked } = this.state;
    if (clicked) {
      e.preventDefault();
    }
  };

  removeOverlay = () => {
    const { clicked } = this.state;
    document.body.style.overflow = "visible";
    this.setState({ clicked: !clicked, activePhoto: null });
  };

  render() {
    const { images, clicked, title } = this.state;
    let photoElements;

    if (images) {
      photoElements = images.map((file, index) => {
        const { fluid } = file.image.childImageSharp;

        // if (title === "design") {
        //   return (
        //     <div
        //       data-index={index}
        //       data-type="design"
        //       key={file + index}
        //       onClick={this.handleClick}
        //     >
        //       <Img fluid={fluid} />
        //     </div>
        //   );
        // } else {
        return (
          <div
            className="photo"
            key={file + index}
            data-index={index}
            data-text={file.band}
            data-type={title === "design" ? "design" : ""}
            onClick={this.handleClick}
          >
            <Img fluid={fluid} style={{ position: "static" }} alt={file.band} />
          </div>
        );
        // }
      });
    }
    return (
      <div className={`photos ${title === "design" ? "photos__posters" : ""}`}>
        {clicked && images && (
          <SliderOverlay
            items={this.state}
            removeOverlay={this.removeOverlay}
          />
        )}
        {photoElements}
      </div>
    );
  }
}

export default Gallery;
