import reducer from "../../app/scripts/reducers/app_reducer.js";
import { assert } from "chai";

describe("app reducer", () => {
  it("should return the initial state", () => {
    assert.deepEqual(reducer(undefined, {}), {
      bands: [],
      searching: false,
      votes: []
    });
  });

  it("should handle SEACHING_BANDS", () => {
    let expectation = {
      searching: true
    };
    let actual = reducer({}, { type: "SEARCHING_BANDS" });
    assert.deepEqual(expectation, actual);
  });

  it("should handle DISPLAY_BANDS", () => {
    let expectation = {
      searching: false,
      bands: ["Smash Mouth", "Nickelback", "Literally Poop"]
    };
    let actual = reducer(
      {},
      {
        type: "DISPLAY_BANDS",
        data: {
          artists: { items: ["Smash Mouth", "Nickelback", "Literally Poop"] }
        }
      }
    );
    assert.deepEqual(expectation, actual);
  });

  it("should handle VOTE_BAND", () => {
    let expectation = {
      votes: ["Nickelback"]
    };

    let actual = reducer(
      { votes: [] },
      {
        type: "VOTE_BAND",
        band: "Nickelback"
      }
    );
    assert.deepEqual(expectation, actual);
  });
});
