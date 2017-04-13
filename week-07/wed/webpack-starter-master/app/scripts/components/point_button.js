import React from 'react';

class PointButton extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    let value = this.props.value;
    let clickEvent = this.props.onClick;
    return (
      <button onClick={clickEvent} value={value}>Add {value}</button>
    );
  };
};

export default PointButton;
