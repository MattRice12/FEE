import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import ArtistBlock from "../../app/scripts/components/artist_block.js";

describe("Artist Block Component", () => {
  it("Should display the band name", () => {
    let Component = shallow(
      <ArtistBlock
        votes={["Donny Boy Young", "Sally Southerland"]}
        band={{
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
    expect(Component.html()).toContain('<img src="medium_img"/>');
  });
});
