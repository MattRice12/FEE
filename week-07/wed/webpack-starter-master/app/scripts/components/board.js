import React from 'react';
import ScoreIncrementor from './score_incrementor.js';
import ScoreBoard from './scoreboard.js';
import Nav from './nav.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <div>
        <Nav />
        <div className="game">
          <ScoreIncrementor />
          <ScoreBoard />
        </div>
      </div>
    );
  };
};

export default Board;
