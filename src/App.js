import React, { Component, Suspense } from "react";
import { Translation } from "react-i18next";
import routes from "./Components/Function/Router";
import { renderRoutes } from "react-router-config";

import "./App.css";

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
              <div className="App">
                {/* {auth ? ( */}
                {renderRoutes(routes, {
                  ...this.props,
                  t: t,
                  i18n: i18n,
                  login: this.login,
                })}

                {/* ) : (
                    <Switch>
                    
                    </Switch>
                  )} */}
              </div>
            );
          }}
        </Translation>
      </Suspense>
    );
  }
}

export default App;
