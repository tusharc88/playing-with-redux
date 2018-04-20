import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Hello from "./Hello";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={styles}>
          <Hello name="CodeSandbox" />
          <h2>Start editing to see some magic happen {"\u2728"}</h2>
          <hr />
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
