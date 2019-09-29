import React from "react";
import Swipe from "react-easy-swipe";
import Img from "gatsby-image";

import ArrowRight from "./icons/arrow-right.svg";
import ArrowLeft from "./icons/arrow-left.svg";
import { FaTimes } from "react-icons/fa";
import "./sliderOverlay.scss";
// const baseImagePath = process.env.PUBLIC_URL + '/assets/images';

class SliderOverlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // currentImage: null,
      // index: null,
      // images: null,
      slideAction: null,
      imagePosition: 0,
      didLoad: false
    };
  }

  componentDidMount() {
    const { activePhoto, images } = this.props.items;
    const index = activePhoto.attributes["data-index"].value;
    const type = activePhoto.attributes["data-type"]
      ? activePhoto.attributes["data-type"].value
      : "";
    const text = activePhoto.attributes["data-text"]
      ? activePhoto.attributes["data-text"].value
      : "";

    this.setState({ images, index, type, text, currentImage: images[index] });
  }

  contextMenu = e => {
    e.preventDefault();
  };

  onLoad = () => {
    this.setState({ didLoad: true });
  };

  handleSlideAction = (e, action) => {
    let { index, images, imagePosition } = this.state;

    //check if mobile size screen to allow swipe events and check if movement is more than 50 pixels either direction
    if (
      window.innerWidth < 812 &&
      (imagePosition > -50 && imagePosition < 50)
    ) {
      this.setState({ imagePosition: 0 });
      return;
    }

    if (action === "next") {
      //check if next slide or prev slide
      index = Number(index) + 1 >= images.length ? 0 : Number(index) + 1;
    } else {
      index = Number(index) - 1 <= -1 ? images.length - 1 : Number(index) - 1;
    }

    this.setState({
      index,
      currentImage: images[index],
      text: images[index].band,
      imagePosition: 0
    });
  };

  handleKeyDown = e => {
    if (e.key === "ArrowLeft") {
      this.handleSlideAction(e, "prev");
    } else if (e.key === "ArrowRight") {
      this.handleSlideAction(e, "next");
    }
  };

  onSwipeMove = (position, event) => {
    this.setState({ imagePosition: position.x }); //image will move with users swipe movements
    return true;
  };

  render() {
    const { currentImage, index, type, text, imagePosition } = this.state;
    const { removeOverlay } = this.props;

    return (
      <section
        className={`sliderOverlay`}
        onKeyDown={this.handleKeyDown}
        tabIndex="0"
      >
        <FaTimes className="sliderOverlay__cancel" onClick={removeOverlay} />

        <Swipe
          className="swipe"
          onSwipeMove={this.onSwipeMove}
          onSwipeLeft={e => this.handleSlideAction(e, "next")}
          onSwipeRight={e => this.handleSlideAction(e, "prev")}
          data-index={index}
          style={{ transform: `translateX(${imagePosition}px` }}
          onClick={e => e.stopPropagation()}
        >
          {/* container for photography image */}
          {currentImage && type !== "design" && (
            <div
              className="slider-image-wrapper"
              onContextMenu={this.contextMenu}
            >
              <Img fluid={currentImage.image.childImageSharp.fluid} />
              <div className="slider-text">
                <p>{text}</p>
              </div>
            </div>
          )}

          {/* container for poster design image */}
          {currentImage && type === "design" && (
            <Img
              fluid={currentImage.image.childImageSharp.fluid}
              className="gatsby-wrapper-design"
              onContextMenu={this.contextMenu}
            />
          )}

          <img
            src={ArrowLeft}
            alt=""
            className="swipe__btn swipe__prev"
            onClick={e => this.handleSlideAction(e, "prev")}
          />
          <img
            src={ArrowRight}
            alt=""
            className="swipe__btn swipe__next"
            onClick={e => this.handleSlideAction(e, "next")}
          />
        </Swipe>
      </section>
    );
  }
}

export default SliderOverlay;
