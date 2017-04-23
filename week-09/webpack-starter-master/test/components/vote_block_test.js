import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import VoteBlock from "../../app/scripts/components/vote_block.js";

describe("Vote Block Component", () => {
  it("Should display the artist's name", () => {
    let Component = shallow(
      <VoteBlock
        vote={{
          name: "Sally Southerland",
          images: [
            { url: "large_img" },
            { url: "medium_img" },
            { url: "small_img" }
          ]
        }}
      />
    );
    expect(Component.text()).toContain("Sally Southerland");
  });

  it("Should display a tiny image of the artist", () => {
    let Component = shallow(
      <VoteBlock
        vote={{
          name: "Sally Southerland",
          images: [
            { url: "large_img" },
            { url: "medium_img" },
            { url: "small_img" }
          ]
        }}
      />
    );
    expect(Component.html()).toContain('<img src="small_img"/>');
  });
});
