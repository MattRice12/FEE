import React from 'react';
import Post from './post'

export default React.createClass({
  getInitialState: function() {
    return {
      posts: []
    }
  },

  componentDidMount: function() {
    $.ajax({
      type: 'GET',
      url: 'http://tiny-za-server.herokuapp.com/collections/mattsblog',
      dataType: 'json'
    }).then((response) => {
      var allPosts = this.state.posts
      response.forEach((post) => {
        allPosts.push(post)
      })
      this.setState({
        posts: allPosts
      })
    })
  },

  render: function() {
    var allPosts = []
    this.state.posts.forEach((post) => {
      allPosts.push(<Post key={post._id} title={post.title} body={post.body} name={post.name} time={post.time} />);
    })

    return(
      <div>
        {allPosts}
      </div>
    )
  }
});
