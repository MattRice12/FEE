import React from "react";
import { Button, Icon } from "react-materialize";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onValueChange(this.refs.searchTerm.value);
  }

  render() {
    return (
      <form className="col s12">
        <div className="input-field col s12">
          <input
            type="text"
            ref="searchTerm"
            onChange={this.handleChange}
            id="search-input"
            placeholder="Search"
          />
          <Button
            className="blue accent-1"
            waves="light"
            onClick={this.props.onClick}
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
