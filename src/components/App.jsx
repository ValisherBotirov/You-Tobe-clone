import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import VideoList from "./VideoList";
import "../index.css";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import VideoSHow from "./VideoShow";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputKey: "", videoList: [], videId: "" };
  }

  // API bilan ishlash
  getData = async (kalitSuz) => {
    const key = "AIzaSyBYFnfXElUzxVGHMd_eFfLUVePcOmXhVeA";
    const data = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          type: "vedio",
          maxResults: 10,
          key: key,
          q: kalitSuz,
        },
      }
    );
    this.setState({ videoList: data });
  };

  // VideoDetailsdan video bisilgandagi o'sha videoni id sini olib keladi
  getVideoId = (id) => {
    this.setState({ videId: id });
  };

  // Natijani chiqaradi
  resultShowVideo = () => {
    if (this.state.videId) {
      return (
        <div className="ui grid container">
          <div className="ui row">
            <div className="nine wide column">
              <VideoSHow id={this.state.videId} />
            </div>
            <div className="three wide column">
              <VideoList
                data={this.state.videoList}
                videoIdFunc={this.getVideoId}
                id={this.state.videId}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        // <div className="showVideo">
        <VideoList data={this.state.videoList} videoIdFunc={this.getVideoId} />
        // </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Header>
          <SearchBar request={this.getData} />
        </Header>
        <h2>{this.getVideoId}</h2>
        {/* {this.resultShowVideo()} */}
        <div className="showVideo">
          {this.resultShowVideo()}
          {/* <VideoList
            data={this.state.videoList}
            videoIdFunc={this.getVideoId}
            id={this.state.videId}
          />
          <VideoSHow id={this.state.videId} /> */}
        </div>
        <LeftMenu />
      </div>
    );
  }
}
export default App;
