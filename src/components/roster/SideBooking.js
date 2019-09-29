import React from "react";
import "./sideBooking.scss";
import { FaTimes } from "react-icons/fa";

class SideBooking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      artist: "",
      venue: "",
      date: "",
      honeypot: "",
      formWaiting: false,
      success: false,
      error: false
    };
  }

  handleChange = e => {
    const { date } = this.state;
    console.log(date);
    const property = e.target.name;
    this.setState({
      [property]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      formWaitingScreen,
      formSuccessScreen,
      formErrorScreen
    } = this.props.formFuncs;

    formWaitingScreen(); //add loader while waiting for submission response

    const { Pageclip } = window;
    const { name, email, phone, artist, venue, date, honeypot } = this.state;

    if (honeypot.value) return; // return if bot adds data to honeypot field

    const data = {
      name,
      email,
      phone,
      artist,
      venue,
      date
    };

    Pageclip.send(
      "9bhYIEEPdatb8h1i4ULPVqDYo7A7UynT",
      "default",
      data,
      (error, response) => {
        if (response) {
          //handle success
          formSuccessScreen();
        } else {
          //handle error
          formErrorScreen();
        }
      }
    );
  };

  render() {
    const { slideClass, currentArtist, slideFunc } = this.props;
    return (
      <div className={`overlay overlay-booking ${slideClass}`}>
        <div className="side-booking-heading">
          <h2>Book A Band</h2>
          <FaTimes className="exit" onClick={slideFunc} />
        </div>

        <div className="side-booking">
          <form
            className="pageclip-form"
            method="post"
            onSubmit={this.handleSubmit}
          >
            <p className="side-booking__desc">
              If you're interested in booking a band for your event/venue please
              fill in the the form below. We will get in touch with you as soon
              as possible
            </p>

            <input
              type="hidden"
              name="honeypot"
              value=""
              style={{ display: "none" }}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="name"
              required
              onChange={this.handleChange}
            />
            <label htmlFor="name">Your Name</label>

            <input
              type="email"
              name="email"
              required
              onChange={this.handleChange}
            />
            <label htmlFor="email">Your Email</label>

            <input type="tel" name="phone" onChange={this.handleChange} />
            <label htmlFor="phone">Your Phone Number</label>

            <input
              type="text"
              name="artist"
              defaultValue={currentArtist}
              onChange={this.handleChange}
            />
            <label htmlFor="artist">Artist's Name</label>

            <input type="text" name="venue" onChange={this.handleChange} />
            <label htmlFor="venue">Venue Name</label>

            <input type="date" name="date" onChange={this.handleChange} />
            <label htmlFor="date">Event Date</label>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default SideBooking;
