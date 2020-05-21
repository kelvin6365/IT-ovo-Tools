import React, { Component } from "react";
import IGDownloader from "../../Function/DownloadIG";
import { Container } from "semantic-ui-react";
import ImageGallery from "react-image-gallery";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      igResources: null,
      isReady: false,
    };
  }
  // create image
  createImg = (photo, area) => {
    // create image
    // let i = document.createElement("img");
    // i.id = "instaImg";
    // i.setAttribute(
    //   "style",
    //   "height: 80vh;max-height: 850px;min-height: 300px;"
    // );
    // i.src = photo;
    // area.appendChild(i);
    // //   // create info
    // //   let info = document.createElement("p");
    // //   info.textContent =
    // //     "Click the right button on the image and select save image..";
    // //   area.appendChild(info);
  };

  fetchIGData = () => {
    const { igURL } = this.state;
    this.setState({
      igResources: null,
      isReady: false,
    });
    if (igURL.indexOf("https://www.instagram.com/p/") == -1) {
      console.log("IG URL Error");
      return this.setState({
        igURLError: true,
        isReady: false,
      });
    }
    try {
      IGDownloader("ig_downloader", igURL, (e) => {
        var preset = [];
        e.map((obj, index) => {
          if (obj.node.is_video) {
            preset.push({
              original: obj.node.display_url,
              renderItem: () => (
                <iframe
                  style={{
                    maxHeight: "600px",
                    height: "80vh",
                    minHeight: "480px",
                    minWidth: "100%",
                  }}
                  src={obj.node.video_url}
                ></iframe>
              ),
              thumbnail: obj.node.display_url,
            });
          } else {
            preset.push({
              original: obj.node.display_url,
              thumbnail: obj.node.display_url,
            });
          }
        });
        this.setState({
          igResources: preset,
          isReady: true,
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  downloadSingleItem = (e) => {
    if (e.target) {
      const link = document.createElement("a");

      link.href = e.target.src;
      link.setAttribute("target", "_blank");
      var area = document.getElementById("downloadSingleItem");
      area.appendChild(link);
      link.click();
      link.remove();
    }
  };

  render() {
    const { igResources, igURLError, isReady } = this.state;
    return (
      <Container>
        <input
          type="text"
          onChange={(e) => this.setState({ igURL: e.target.value })}
        ></input>
        <button
          onClick={() => {
            this.fetchIGData();
          }}
        >
          Click
        </button>{" "}
        {igResources && isReady && (
          <ImageGallery
            showIndex
            showBullets
            items={igResources}
            onClick={(e) => {
              this.downloadSingleItem(e);
            }}
          />
        )}
        <div id="ig_downloader" className="image-placeholder"></div>
        <div id="downloadSingleItem"></div>
      </Container>
    );
  }
}

export default index;
