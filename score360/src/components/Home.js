import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    post: []
  };
  componentDidMount() {
    axios
      .get("http://blog.sportsfever360.com/wp-json/wp/v2/posts")
      .then(res => {
        this.setState({
          post: res.data
        });
      });
  }
  render() {
    const { post } = this.state;
    console.log(post);
    return (
      <div>
        {post.map(post => (
          <div class="card col-lg-6">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <p
                class="card-text"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <a href={post.link} class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Home;
