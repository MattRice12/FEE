import React from 'react';
import { connect } from 'react-redux';
import container from '../containers/all.js';

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    let CurrentView = this.props.view;
    return (
      <section>
        <CurrentView />
      </section>
    );
  };
};

export default connect(container.allState)(AppRoot);
