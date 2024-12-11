import { render, screen } from "@testing-library/react";

import RepositoriesSummary from "./RepositoriesSummary";

describe("RepositoriesSummary", () => {
  const mockRepository = {
    stargazers_count: 130,
    open_issues: 10,
    forks: 20,
    language: "JavaScript",
  };

  test("it displays information about the repository", () => {
    render(<RepositoriesSummary repository={mockRepository} />);

    for (let key in mockRepository) {
      const value = mockRepository[key];
      const element = screen.getByText(new RegExp(value, "i"));
      expect(element).toBeInTheDocument();
    }
  });
});
