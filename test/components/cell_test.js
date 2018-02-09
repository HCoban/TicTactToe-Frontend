import { renderComponent, expect } from "../test_helper";
import Cell from "../../src/components/cell";

describe("Cell", () => {
  let state;

  beforeEach(() => {
    state = {
      game: {
        1: {
          completed: false
        }
      },
      cells: {
        A1: { value: "X", step: 1 },
        A2: { value: "O", step: 2 }
      }
    };
  });

  it("has the correct class", () => {
    let component = renderComponent(Cell, null, state);
    expect(component).to.have.class("cell");
  });

  it("shows cell value", () => {
    let props = {
      gameId: 1,
      i: 0,
      j: 0
    };
    let component = renderComponent(Cell, props, state);
    expect(component.find("span")).to.have.text("X");
  });
});
