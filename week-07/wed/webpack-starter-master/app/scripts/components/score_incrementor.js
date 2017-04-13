import React from 'react';
import { connect } from 'react-redux';
import containers from '../containers/all.js';
import addScore from '../actions/add_score.js';
import PointButton from './point_button.js';

class ScoreIncrementor extends React.Component {
  constructor (props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  };

  clickHandler (e) {
    let point = e.target.value;
    this.props.dispatch(addScore(point));
  }

  render () {
    let total = this.props.score;
    return (
      <div className="buttons">
        <PointButton onClick={this.clickHandler} value={1} />
        <PointButton onClick={this.clickHandler} value={5} />
      </div>
    );
  };
};

export default connect(containers.justScore)(ScoreIncrementor);
