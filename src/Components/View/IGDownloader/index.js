import React, { Component } from "react";
import IGDownloader from "../../Function/DownloadIG";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { igURL } = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ igURL: e.target.value })}
        ></input>
        <button onClick={() => IGDownloader("ig_downloader", igURL)}>
          Click
        </button>{" "}
        <div id="ig_downloader" className="image-placeholder"></div>
      </div>
    );
  }
}

export default index;
