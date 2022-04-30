import React from "react";
import VideoDetails from "./VideoDetail";
import "../index.css";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoData: [] };
  }

  renderList = () => {
    // console.log(this.props.data);
    return this.props.data.data?.items.map((val) => {
      return (
        <div className="oneVideos">
          <VideoDetails
            val={val}
            videoIdFunc={this.props.videoIdFunc}
            id={this.props.id}
          />
        </div>
      );
    });
  };

  render() {
    return <div className="videoList">{this.renderList()}</div>;
  }
}

export default VideoList;
