import React from "react";
import { useNavigate } from "react-router";
import { useGetPhoneNumbers } from "../../hooks/useGetPhoneNumbers";
import { render } from "@testing-library/react";
import { Contacts } from "./Contacts";

jest.mock("../../hooks/useGetPhoneNumbers");
const useGetPhoneNumbersMock = useGetPhoneNumbers as jest.Mock;

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
}));

describe("Contacts component", () => {
  beforeEach(() => {
    useGetPhoneNumbersMock.mockReturnValue({
      data: [
        {
          id: "test-id",
          name: "Test",
          number: "+15555555555",
        },
      ],
    });
  });

  it("renders based on URL param", async () => {
    const { getByTestId } = render(<Contacts />);

    expect(getByTestId("contacts")).toBeVisible();
    expect(getByTestId("contacts")).toHaveTextContent("Test");
    expect(getByTestId("contacts")).toHaveTextContent("+15555555555");
  });
});
