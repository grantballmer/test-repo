import React from "react";
// import "../../pages/scss/podcast.scss";
import "./episode.scss";

const Episode = () => {
  return (
    <div className="episodePage">
      <div className="podcast__hero" />
      <div className="episodePage__group">
        <h1>Chris Bota & John Nowak of Desmond Jones</h1>
        <p className="episodePage__date">Published May 20th, 2019</p>
      </div>

      <div className="episodePage__group">
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          title="episode 1"
          src={
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/624801270&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          }
        />
        <p className="episodePage__desc">
          On episode 1, featuring Chris Bota and John Nowak of Desmond Jones, we
          chat about the early years and members and tour life. Listen now!
        </p>
      </div>
    </div>
  );
};

export default Episode;
