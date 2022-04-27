import React from "react";
import ReactDOM from "react-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { keyword: "" };
  }
  onChangeInput = (event) => {
    this.setState({ keyword: event.target.value });
    // console.log(event.target.value);
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.request(this.state.keyword);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmitForm}
          className="ui category search container"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div
            className="ui icon input"
            style={{ width: "100%" }}
            onChange={this.onChangeInput}
          >
            <input
              className="prompt"
              type="text"
              placeholder="Search animals..."
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </form>
        <h2>{this.state.keyword}</h2>
      </div>
    );
  }
}

export default SearchBar;
