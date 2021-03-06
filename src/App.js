import React, { Component } from "react";
import "./App.css";
import Write from "./Write";
import Posts from "./Posts";

const posts = [
  {
    title: "internship",
    date: "20-07-2020",
    content: "this is my first post",
  },
  {
    title: "2nd post",
    date: "20-07-2020",
    content: "another one",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts,
    };

    for (let i = 0; i < this.state.posts.length; i++) {
      this.state.posts[i].id = i;
    }

    this.updatePosts = this.updatePosts.bind(this);
  }

  updatePosts(newPosts) {
    this.setState({ posts: newPosts });
  }

  render() {
    return (
      <div id="app" className="w3-container w3-theme-l3">
        <Write posts={this.state.posts} updatePosts={this.updatePosts} />
        <Posts posts={this.state.posts} updatePosts={this.updatePosts} />
      </div>
    );
  }
}
