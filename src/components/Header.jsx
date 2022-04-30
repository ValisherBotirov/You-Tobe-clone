import React from "react";
import "../index.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <i
            className="youtube  icon"
            style={{ fontSize: "30px", color: "red" }}
          ></i>
          <h2 className="youtobe--text">YouTobe</h2>
        </div>
        <div>{this.props.children}</div>
        <div className="header--right">
          <i className="bell outline icon"></i>
          <i className="star outline icon"></i>
          <i className="user circle outline icon"></i>
        </div>
      </div>
    );
  }
}

export default Header;
