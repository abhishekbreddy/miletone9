import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import './style.css'

class Signin extends React.Component {
  handleSignin = () => {      // to dispatch action
    const input = document.getElementById("myinput").value;
    const password = document.getElementById("password").value;
    if (input === "abhishek" && password === "abhi") {
      const action = {
        type: "LOGIN",
        payload: input
      };
      this.props.dispatch(action);
    }
  };
  render() {
    if (this.props.isSigned) {
      return <Redirect to="/" />;
    }
    return (
      <div className="Login">
        Username:<input id="myinput"/>
      <br/>
      <br/>
       Password: <input id="password" type="password" />
        <br/>
        <br/>
        <button onClick={this.handleSignin}>Signin</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) { //dispatching actions to store
  return {
    dispatch: dispatch
  };
}

// const componentConnect = connect(null, mapDispatchToProps);

// export default componentConnect(Signin);

// function Currying
export default connect(null, mapDispatchToProps)(Signin);//return a new component 
