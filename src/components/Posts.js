import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const styles = {
  width: "90%",
  margin: "auto"
};

class Posts extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchPosts();
    console.log(
      "componentDidMount newPost " + JSON.stringify(this.props.newPost)
    );
  }

  static getDerivedStateFromProps(nextProps) {
    console.log("in getDerivedStateFromProps");
    if (nextProps.newPost) {
      console.log("newPost " + JSON.stringify(nextProps.newPost));
      nextProps.posts.unshift(nextProps.newPost);
    }

    return null;
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        <div style={styles}>{postItems}</div>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
