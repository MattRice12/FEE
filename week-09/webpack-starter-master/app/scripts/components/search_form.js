import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="col s12">
        <div className="input-field col s12">
          <input id="search-input" placeholder="Search" />
          <button className="btn" onClick={this.props.onClick}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
