import React from 'react';
import Nav from './nav';
import Posts from './posts';
import NewPost from './newPost';

export default React.createClass({
  render: function () {
    return (
      <section>
        <Nav />
        <NewPost />
        <Posts />
      </section>
    );
  }
});
