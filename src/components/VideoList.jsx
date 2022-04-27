import React from "react";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoData: [] };
  }

  renderList = () => {
    return this.props.data.data?.items.map((val) => {
      return (
        <div key={val.id.videoId}>
          <img src={val.snippet.thumbnails.high.url} />
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default VideoList;
