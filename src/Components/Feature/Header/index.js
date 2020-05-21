import React, { Component } from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { mobile } = this.props;
    return (
      <Container text>
        <Header
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
        </Button>
      </Container>
    );
  }
}

export default index;
