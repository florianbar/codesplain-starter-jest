import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import RepositoriesListItem from "./RepositoriesListItem";

// jest.mock("../tree/FileIcon", () => {
//   return () => {
//     return "File icon component";
//   };
// });

describe("RepositoriesListItem", () => {
  const renderComponent = () => {
    const mockRepository = {
      full_name: "facebook/react",
      language: "JavaScript",
      description: "A description",
      owner: { login: "facebook" },
      name: "react",
      html_url: "https://github.com/facebook/react",
    };

    render(
      <MemoryRouter>
        <RepositoriesListItem repository={mockRepository} />
      </MemoryRouter>
    );

    return { mockRepository };
  };

  test("show a link to the github homepage for the repository", async () => {
    const { mockRepository } = renderComponent();

    // fix the file icon element error
    await screen.findByRole("img", { name: mockRepository.language });

    const link = screen.getByRole("link", { name: /github repository/i });
    expect(link).toHaveAttribute("href", mockRepository.html_url);
  });

  test("shows the file icon with the appropriate icon", async () => {
    const { mockRepository } = renderComponent();

    const icon = await screen.findByRole("img", {
      name: mockRepository.language,
    });

    expect(icon).toHaveClass("js-icon");
  });

  test("shows a link to the code editor page", async () => {
    const { mockRepository } = renderComponent();

    screen.debug();

    // fix the file icon element error
    await screen.findByRole("img", { name: mockRepository.language });

    const link = screen.getByRole("link", {
      name: new RegExp(mockRepository.owner.login),
    });

    expect(link).toHaveAttribute(
      "href",
      `/repositories/${mockRepository.full_name}`
    );
  });
});
