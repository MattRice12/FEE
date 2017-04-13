import React from 'react';

class Link extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <li onClick={this.props.onClick}>{this.props.dest}</li>
    );
  };
};

export default Link;
