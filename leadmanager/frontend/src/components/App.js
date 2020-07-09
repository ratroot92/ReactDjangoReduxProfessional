import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layouts/Header";
import Dashboard from "./leads/Dashboard";
import { Provider } from "react-redux";
import store from "../store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <Dashboard />
              </div>
            </div>
          </div>
        </Fragment>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
