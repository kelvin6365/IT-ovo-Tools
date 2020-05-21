import React, { Component, Suspense } from "react";
import PropTypes from "prop-types";
import { Translation } from "react-i18next";
import routes from "./Components/Function/Router";
import { renderRoutes } from "react-router-config";
import DesktopContainer from "./Components/Feature/DesktopContainer";
import MobileContainer from "./Components/Feature/MobileContainer";
import { Container, Grid, Header, Segment } from "semantic-ui-react";
import "./App.scss";

const ResponsiveContainer = ({ children }) => (
  <>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </>
);
ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <Translation>
          {(t, { i18n }) => {
            return (
              <ResponsiveContainer>
                <div className="warper">
                  {/* {auth ? ( */}
                  {renderRoutes(routes, {
                    ...this.props,
                    t: t,
                    i18n: i18n,
                    login: this.login,
                  })}
                </div>
                {/* ) : (
                    <Switch>
                    
                    </Switch>
                  )} */}
                <Segment inverted vertical style={{ padding: "5em 0em" }}>
                  <Container>
                    <Grid divided inverted stackable>
                      <Grid.Row>
                        {/* <Grid.Column width={3}>
                        <Header inverted as="h4" content="About" />
                        <List link inverted>
                          <List.Item as="a">Sitemap</List.Item>
                          <List.Item as="a">Contact Us</List.Item>
                          <List.Item as="a">Religious Ceremonies</List.Item>
                          <List.Item as="a">Gazebo Plans</List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header inverted as="h4" content="Services" />
                        <List link inverted>
                          <List.Item as="a">Banana Pre-Order</List.Item>
                          <List.Item as="a">DNA FAQ</List.Item>
                          <List.Item as="a">How To Access</List.Item>
                          <List.Item as="a">Favorite X-Men</List.Item>
                        </List>
                      </Grid.Column> */}
                        <Grid.Column>
                          <Header as="h4" inverted>
                            © 2020 IT-ovo
                          </Header>
                          <p>
                            Free to share, if you love it please bookmark,
                            Thanks!
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
                </Segment>
              </ResponsiveContainer>
            );
          }}
        </Translation>
      </Suspense>
    );
  }
}

export default App;
