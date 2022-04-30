/**<div key={val.id.videoId}>
          <img src={val.snippet.thumbnails.high.url} />
        </div> */
import React from "react";
import "../index.css";

class VideoDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videoId: "" };
  }

  getIdClick = () => {
    this.props.videoIdFunc(this.props.val.id.videoId);
  };

  render() {
    // let url = `https://www.youtube.com/embed/${this.props.val.id.videoId}`;
    // console.log(this.props.val);
    return (
      <div className={!this.props.id ? "videoGroup" : "videGroup2"}>
        <div
          key={this.props.val.id.videoId}
          className={!this.props.id ? "imgBox" : "imgBox2"}
        >
          <img
            onClick={this.getIdClick}
            src={this.props.val.snippet.thumbnails.medium.url}
          />
        </div>

        <div
          className={!this.props.id ? "videoDesciption" : "videoDesciption2"}
        >
          <h2 onClick={this.getIdClick} className="chanelName">
            {this.props.val.snippet.channelTitle}
          </h2>
          <p className="videoTime">{this.props.val.snippet.publishTime}</p>
          {/* <p>{this.state.videoId}</p> */}
          <p className="channeldeiscription">
            {this.props.val.snippet.description}
          </p>
        </div>
      </div>
    );
  }
}

export default VideoDetails;
