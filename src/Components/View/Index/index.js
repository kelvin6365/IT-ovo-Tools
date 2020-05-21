import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import HomepageHeading from "../../Feature/Header";
import {
  Button,
  Container,
  Divider,
  Responsive,
  Header,
  Segment,
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const HomepageLayout = (props) => {
  console.log(props, getWidth(), Responsive.onlyTablet);
  return (
    <>
      {/* <Segment style={{ padding: "8em 0em" }} vertical>
                <Grid container stackable verticalAlign="middle">
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <Header as="h3" style={{ fontSize: "2em" }}>
                        We Help Companies and Companions
                      </Header>
                      <p style={{ fontSize: "1.33em" }}>
                        We can give your company superpowers to do things that they never
                        thought possible. Let us delight your customers and empower your
                        needs... through pure data analytics.
                      </p>
                      <Header as="h3" style={{ fontSize: "2em" }}>
                        We Make Bananas That Can Dance
                      </Header>
                      <p style={{ fontSize: "1.33em" }}>
                        Yes that's right, you thought it was the stuff of dreams, but even
                        bananas can be bioengineered.
                      </p>
                    </Grid.Column>
                    <Grid.Column floated="right" width={6}>
                      <Image
                        bordered
                        rounded
                        size="large"
                        src="/images/wireframe/white-image.png"
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column textAlign="center">
                      <Button size="huge">Check Them Out</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
          
              <Segment style={{ padding: "0em" }} vertical>
                <Grid celled="internally" columns="equal" stackable>
                  <Grid.Row textAlign="center">
                    <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                      <Header as="h3" style={{ fontSize: "2em" }}>
                        "What a Company"
                      </Header>
                      <p style={{ fontSize: "1.33em" }}>
                        That is what they all say about us
                      </p>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                      <Header as="h3" style={{ fontSize: "2em" }}>
                        "I shouldn't have gone with their competitor."
                      </Header>
                      <p style={{ fontSize: "1.33em" }}>
                        <Image avatar src="/images/avatar/large/nan.jpg" />
                        <b>Nan</b> Chief Fun Officer Acme Toys
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment> */}
      <Segment
        inverted
        textAlign="center"
        // getWidth={getWidth()}
        style={{
          minHeight: getWidth() <= Responsive.onlyMobile.maxWidth ? 350 : 450,
          padding: "1em 0em",
        }}
        vertical
      >
        <HomepageHeading
          mobile={getWidth() <= Responsive.onlyMobile.maxWidth ? true : false}
        />
      </Segment>

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Instagram Downloader
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Download Instagram Images or Videos by the URL link from Instagram.
          </p>
          <NavLink to="/ig-dl">
            <Button size="large">Click to Try it</Button>
          </NavLink>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a href="#">Case Studies</a>
          </Divider>

          <Header as="h3" style={{ fontSize: "2em" }}>
            Youtube Downloader
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Download Youtube Video by the URL link from youtube.
          </p>
          <Button as="a" size="large">
            Click to Try it
          </Button>
        </Container>
      </Segment>
    </>
  );
};
export default HomepageLayout;
