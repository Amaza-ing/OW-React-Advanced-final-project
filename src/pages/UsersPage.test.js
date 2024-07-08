import { render, screen } from "@testing-library/react";
import UsersPage from "./UsersPage";
import { RecoilRoot } from "recoil";
import { userListState } from "../atoms/UserListState";

jest.mock("../components/HeaderComponent.jsx", () => {
  return {
    __esModule: true,
    default: () => <></>,
  };
});

describe("UsersPage", () => {
  it("should be 'Users", () => {
    const { getByTestId } = render(
      <RecoilRoot>
        <UsersPage />
      </RecoilRoot>
    );

    const title = getByTestId("users-title").textContent;
    expect(title).toEqual("Users");
  });

  it("should find 'Adrián Maza'", async () => {
    const mockedState = [
      {
        id: "1",
        name: "Adrián",
        lastName: "Maza",
        email: "adrian@email.com",
        img: "adrian.jpg",
      },
    ];

    render(
      <RecoilRoot
        initializeState={(snapshot) => snapshot.set(userListState, mockedState)}
      >
        <UsersPage />
      </RecoilRoot>
    );

    expect(await screen.findByText("Adrián Maza")).toBeVisible();
  });
});
