import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  waitForElement
} from "@testing-library/react";
import Employees from "./Employees";

describe("Display Employees", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  const successDummyData = ["Leanne Graham", "Ervin Howell", "Clementine Bauch"];
  const getNames = jest.fn(() => Promise.resolve(successDummyData));

  test("Should list the names if promise resolves", async () => {
    const { getByLabelText, getAllByTestId, getByTestId } = render(
      <Employees listEmployees={getNames} />
    );
    const empWrapElement = getByTestId("emp-wrap");
    //expect that before any event it should be empty
    expect(empWrapElement).toBeEmpty();

    const getButton = getByLabelText(/Get Employee List/i);
    fireEvent.click(getButton);

    const JSONafterAPI = await waitForElement(() =>
      getAllByTestId("single-item").map(item => item.textContent)
    );
    expect(JSONafterAPI).toEqual(successDummyData);
  });
});