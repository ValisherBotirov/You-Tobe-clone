import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import VideoList from "./VideoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputKey: "", videoList: [] };
  }

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

  render() {
    return (
      <div>
        <SearchBar request={this.getData} />
        <VideoList data={this.state.videoList} />
      </div>
    );
  }
}

export default App;
