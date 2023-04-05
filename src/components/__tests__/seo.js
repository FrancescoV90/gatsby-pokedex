import React from "react";
import { render } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import Seo from "../seo";

describe("Seo component", () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: `Gatsby Pokedex`,
        },
      },
    });
  });

  it("renders the tests correctly", () => {
    const mockTitle = "Home Page | Gatsby Pokedex";

    render(<Seo title="Home Page" />);
    const title = document.title;

    expect(title).toBe(mockTitle);
  });
});
