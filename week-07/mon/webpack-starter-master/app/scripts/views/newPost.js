import React from 'react';

export default React.createClass({
  submitHandler: function(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'http://tiny-za-server.herokuapp.com/collections/mattsblog',
      contentType: 'application/json',
      data: JSON.stringify({
        name: 'Matt',
        title: e.target.querySelector('input').value,
        body: e.target.querySelector('textarea').value,
        time: '11pm'
      })
    })
  },

  render: function() {
    return(
    <form onSubmit={this.submitHandler}>
      <label htmlFor="new-title">Post Title</label>
      <input id="new-title" />

      <label htmlFor="new-post">New Post</label>
      <textarea id="new-post" />

      <button>Submit</button>
    </form>)
  }
})
