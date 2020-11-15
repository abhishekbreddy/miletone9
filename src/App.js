import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Signin from "./Components/Signin";
import { connect } from "react-redux";

function PrivateRoute({ component: Component, isSigned, ...rest }) {  //using private route for issigned
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isSigned) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <PrivateRoute
              exact={true}
              component={Home}
              path="/home"
              isSigned={this.props.user}
            />
            <PrivateRoute
              component={Movies}
              path="/companies"
              isSigned={this.props.user}
            />
            <Route
              path="/signin"
              render={(props) => {
                return (
                  <Signin
                    {...props}
                    handleSignin={this.handleSignin}
                    isSigned={this.props.user}
                  />
                );
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) { //receives the entire store state & return an object of data this component needs
  console.log(state);
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(App);