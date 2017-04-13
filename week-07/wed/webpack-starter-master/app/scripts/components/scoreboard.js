import React from 'react';
import { connect } from 'react-redux';
import containers from '../containers/all.js';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <div className="score-board">{this.props.score}</div>
    );
  };
};

export default connect(containers.justScore)(ScoreBoard);
