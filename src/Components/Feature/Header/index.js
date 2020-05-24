import React, { Component } from "react";
import { Button, Container, Header, Icon, Responsive } from "semantic-ui-react";
import { Parallax, Background } from "react-parallax";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getWidth = () => {
    const isSSR = typeof window === "undefined";

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
  };

  render() {
    const { mobile } = this.props;
    return (
      //   <Container>
      /* <Header
          as="h1"
          content="Imagine-a-Company"
          inverted
          style={{
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: mobile ? "2.5em" : "1em",
          }}
        />
        <Header
          as="h2"
          content="Do whatever you want when you want to."
          inverted
          style={{
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
            marginTop: mobile ? "0.5em" : "1.5em",
          }}
        />
        <Button primary size="huge">
          Get Started
          <Icon name="right arrow" />
        </Button> */
      <Parallax
        // blur={5}
        bgImage={
          "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
        }
        strength={500}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.31)",
            minHeight:
              this.getWidth() <= Responsive.onlyMobile.maxWidth ? 350 : 450,
          }}
        >
          <Container>
            <Header
              as="h1"
              content="Tools Box - IT-ovo"
              inverted
              style={{
                fontSize: mobile ? "2em" : "4em",
                fontWeight: "normal",
                marginBottom: 0,
                marginTop: mobile ? "0rem" : "0rem",
                paddingTop: mobile ? "10rem" : "3em",
              }}
            />
          </Container>
        </div>
      </Parallax>
      /* </Container> */
    );
  }
}

export default index;
