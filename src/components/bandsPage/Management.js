import React from "react"

const Management = ({ people }) =>
  people.map(person => {
    const { position, name, email } = person
    return (
      <div key={`${name + position}`} className="contact-information">
        <h5>
          {position}: <span>{name}</span>
        </h5>
        <a
          className="contact-information__email"
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope" />
          <p>{email}</p>
        </a>
      </div>
    )
  })

export default Management
