import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    console.log("constructor 1");
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("componentDidMount 2");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("PROPS", this.props);
    console.log("State", this.state);
    if (prevState.count === 0 && this.state.count === 1) {
      this.setState({ count: 100 });
    }
  }

  componentWillUnmount(){
    // cleanUp
  }

  handelCkick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  render() {
    console.log("Render 3");
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.handelCkick}> onClick</button>
      </div>
    );
  }
}

export default App;
