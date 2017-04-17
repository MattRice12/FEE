import React from "react";
import { connect } from "react-redux";

const Question = ({ match, questions, history }) => {
  const question = questions[match.params.id];

  return (
    <div>
      <h1>{question.question}</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          let url = "/questions/" + (Number(match.params.id) + 1);
          history.push(url);
        }}
      >
        <input />
        <button>
          Next
        </button>
      </form>
    </div>
  );
};

export default connect(state => state)(Question);
