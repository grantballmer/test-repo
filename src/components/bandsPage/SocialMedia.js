import React from "react"

import {
  FaSpotify,
  FaYoutube,
  FaItunesNote,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa"

const SocialMedia = ({
  info: { spotify, youtube, itunes, facebook, instagram },
}) => (
  <div className="profile-about__music">
    <a
      className="profile-about__music--platform"
      href={spotify}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaSpotify className="profile-icon" />
      <h4>Spotify</h4>
    </a>

    <a
      className="profile-about__music--platform"
      href={youtube}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaYoutube className="profile-icon" />
      <h4>Youtube</h4>
    </a>

    <a
      className="profile-about__music--platform"
      href={itunes}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaItunesNote className="profile-icon" />
      <h4>iTunes</h4>
    </a>

    <a
      className="profile-about__music--platform"
      href={facebook}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookSquare className="profile-icon" />
      <h4>Facebook</h4>
    </a>

    <a
      className="profile-about__music--platform"
      href={instagram}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram className="profile-icon" />
      <h4>Instagram</h4>
    </a>
  </div>
)

export default SocialMedia
