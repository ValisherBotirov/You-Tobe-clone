import React from "react";

class VideoSHow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let url = `https://www.youtube.com/embed/${this.props.id}`;
    return (
      <div>
        <iframe
          className="video"
          width="600"
          height="500"
          src={url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default VideoSHow;
