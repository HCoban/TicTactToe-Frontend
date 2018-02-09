import { renderComponent, expect } from "../test_helper";
import { GameShowBase } from "../../src/components/game_show";

describe("GameShow", () => {
  let component;

  beforeEach(() => {
    let props = {
      location: {
        pathname: "/1"
      },
      requestGame: () => null
    };
    let state = { game: { 1: { id: 1 } } };
    component = renderComponent(GameShowBase, props, state);
  });

  it("renders header", () => {
    expect(component.find(".header")).to.have.length(1);
  });

  it("renders cell-list", () => {
    expect(component.find(".cell-list")).to.have.length(1);
  });

  it("renders move-log", () => {
    expect(component.find(".move-log")).to.have.length(1);
  });
});
