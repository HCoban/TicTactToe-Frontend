import { renderComponent, expect } from "../test_helper";
import Form from "../../src/components/form";
import { create } from "domain";

describe("Form", () => {
  it("has two input fields", () => {
    let component = renderComponent(Form);
    expect(component.find("input")).to.have.length(2);
  });

  it("has a button", () => {
    let component = renderComponent(Form);
    expect(component.find("button")).to.have.length(1);
  });
});
