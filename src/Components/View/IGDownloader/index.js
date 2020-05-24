import React, { Component } from "react";
import IGDownloader from "../../Function/DownloadIG";
import {
  Container,
  Form,
  Input,
  Button,
  Image,
  Accordion,
  Card,
  Advertisement,
} from "semantic-ui-react";
import ImageGallery from "react-image-gallery";
import ReactGA from "react-ga";
import GIF from "../../../assets/images/20200523_122611.gif";
import PNG from "../../../assets/images/igurl.png";

const panels = [
  {
    key: "acquire-dog",
    title: {
      content: "How to get the URL?",
      icon: "question",
    },
    content: {
      content: (
        <Card fluid color="red">
          <Image src={GIF} bordered size={"medium"} />
          <div>
            <Image
              src={PNG}
              bordered
              size={"massive"}
              verticalAlign={"middle"}
            />
          </div>
        </Card>
      ),
    },
  },
];

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      igResources: null,
      isReady: false,
      activeIndex: 999,
      igURL: "",
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
      loading: true,
      igURLError: false,
    });
    if (igURL.trim().length == 0)
      return this.setState({
        igURLError: true,
        isReady: false,
        loading: false,
      });
    let post = igURL.split("/?")[0];
    let regex = /(https?:\/\/www\.)?instagram\.com(\/p\/\w+\/?)/;

    if (!post.match(regex)) {
      console.log("IG URL Error");
      return this.setState({
        igURLError: true,
        isReady: false,
        loading: false,
      });
    }
    try {
      ReactGA.event({
        category: "IgDownload",
        label: igURL,
        action: "URL Input",
      });
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
          loading: false,
          activeIndex: 999,
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  downloadSingleItem = (e) => {
    if (e.target) {
      const link = e.target.src;
      fetch(link).then((response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          var fileName = link;
          console.log(fileName.split("/"));
          fileName = fileName.split("/")[7].replace(/[\#\?].*$/, "");
          a.download = fileName;
          a.click();
          ReactGA.event({
            category: "IgDownload",
            label: link,
            action: "Image Download",
          });
        });
      });
      // link.href = e.target.src;
      // link.setAttribute("target", "_blank");
      // var area = document.getElementById("downloadSingleItem");
      // area.appendChild(link);
      // link.click();
      // link.remove();
    }
  };

  render() {
    const {
      igResources,
      igURLError,
      isReady,
      loading,
      activeIndex,
    } = this.state;
    return (
      <Container style={{ position: "relative" }}>
        <br />
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              error={
                igURLError
                  ? {
                      content: "Please enter a valid Instagram URL",
                      pointing: "below",
                    }
                  : false
              }
              control={Input}
            >
              <Input
                placeholder={"Instagram URL..."}
                onChange={(e) => this.setState({ igURL: e.target.value })}
              />
              <Button
                id="form-button-control-public"
                // control={Button}
                primary
                style={{ marginLeft: "10px", minWidth: "100px" }}
                loading={loading}
                content="Enter"
                onClick={() => {
                  this.fetchIGData();
                }}
              />
            </Form.Field>
            {/* 
            <Form.Field
              id="form-button-control-public"
              control={Button}
              primary
              loading={loading}
              content="Enter"
              onClick={() => {
                this.fetchIGData();
              }}
            /> */}
          </Form.Group>
          <Form.Group widths="equal">
            <Accordion
              panels={panels}
              onTitleClick={() => {
                this.setState({
                  activeIndex: activeIndex == 0 ? 999 : 0,
                });
              }}
              activeIndex={activeIndex}
            />
          </Form.Group>
        </Form>
        <br />
        <Advertisement unit="leaderboard" centered>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6712338163319742"
            data-ad-slot="4038459651"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </Advertisement>
        <br />
        {igResources && isReady && (
          <div
            style={{
              position: "absolute",
              right: "195px",
              zIndex: "1",
              fontWeight: "bold",
              fontSize: "18px",
              color: "WHITE",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            Click the Image to Dwonload It!
          </div>
        )}
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
        <br />
        <Advertisement unit="leaderboard" centered>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6712338163319742"
            data-ad-slot="3519584905"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </Advertisement>
      </Container>
    );
  }
}

export default index;
