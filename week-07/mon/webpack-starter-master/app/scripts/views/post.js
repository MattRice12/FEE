import React from 'react';

const Post = React.createClass({
  render: function() {
    return(
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
        <sub>{this.props.name} </sub>
        <sub>{this.props.time}</sub>
      </div>
    )
  }
})

export default Post;
