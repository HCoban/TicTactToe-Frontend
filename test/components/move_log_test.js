import { renderComponent, expect } from "../test_helper";
import MoveLog from "../../src/components/move_log";

describe("MoveLog", () => {
  let component;

  beforeEach(() => {
    const state = {
      cells: {
        A3: { value: "X", step: 1 },
        B2: { value: "O", step: 2 }
      },
      game: {
        1: {
          playerOne: "first",
          playerTwo: "second"
        }
      }
    };
    const props = { gameId: 1 };
    component = renderComponent(MoveLog, props, state);
  });

  it("has correct class", () => {
    expect(component).to.have.class("move-log");
  });

  it("renders correct text", () => {
    expect(component.find("li:nth-child(1)")).to.contain("1: first marked A3");
    expect(component.find("li:nth-child(2)")).to.contain("2: second marked B2");
  });
});
