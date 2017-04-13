import React from 'react';

export default React.createClass({
  render: function () {
    return(<a href={this.props.destination}>{this.props.name}</a>)
  }
})
