import React from "react";
// import "../../pages/scss/podcast.scss";
import "./episode.scss";

const Episode = () => {
  return (
    <div className="episodePage">
      <div className="podcast__hero" />
      <div className="episodePage__group">
        <h1>Special Music Episode</h1>
        <p className="episodePage__date">Published May 22nd, 2019</p>
      </div>

      <div className="episodePage__group">
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          title="episode 2"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/624801270&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
        <p className="episodePage__desc">
          Special music episode featuring the songs of bands from Michigan,
          Ohio, and Colorado.
        </p>
      </div>
    </div>
  );
};

export default Episode;
