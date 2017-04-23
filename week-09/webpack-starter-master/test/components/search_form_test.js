import React from "react";
import { connect } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import SearchForm from "../../app/scripts/components/search_form.js";

describe("Search Form Component", () => {
  it("Should display the search bar", () => {
    let Component = shallow(<SearchForm />);
    expect(Component.html()).toContain(
      '<input id="search-input" placeholder="Search"/>'
    );
  });

  it("Should display the submit button", () => {
    let Component = shallow(<SearchForm />);
    expect(Component.html()).toContain('<button class="btn">Submit</button>');
  });
});
