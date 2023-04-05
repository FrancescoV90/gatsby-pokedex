import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShallowRenderer from "react-test-renderer/shallow";
import { useStaticQuery } from "gatsby";
import { useTranslation } from "react-i18next";

import IndexPage from "../index";

let realUseContext;
let useContextMock;
const mockData = {
  pokemonData: {
    nodes: [
      {
        id: "bf6eec7b-51fb-5332-8828-b83ad18f15f9",
        name: "bulbasaur",
        names: [
          {
            name: "フシギダネ",
            language: {
              name: "ja-Hrkt",
            },
          },
          {
            name: "Fushigidane",
            language: {
              name: "roomaji",
            },
          },
          {
            name: "이상해씨",
            language: {
              name: "ko",
            },
          },
          {
            name: "妙蛙種子",
            language: {
              name: "zh-Hant",
            },
          },
          {
            name: "Bulbizarre",
            language: {
              name: "fr",
            },
          },
          {
            name: "Bisasam",
            language: {
              name: "de",
            },
          },
          {
            name: "Bulbasaur",
            language: {
              name: "es",
            },
          },
          {
            name: "Bulbasaur",
            language: {
              name: "it",
            },
          },
          {
            name: "Bulbasaur",
            language: {
              name: "en",
            },
          },
          {
            name: "フシギダネ",
            language: {
              name: "ja",
            },
          },
          {
            name: "妙蛙种子",
            language: {
              name: "zh-Hans",
            },
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
        pokedex_numbers: [
          {
            entry_number: 1,
            pokedex: {
              name: "national",
            },
          },
          {
            entry_number: 1,
            pokedex: {
              name: "kanto",
            },
          },
          {
            entry_number: 226,
            pokedex: {
              name: "original-johto",
            },
          },
          {
            entry_number: 231,
            pokedex: {
              name: "updated-johto",
            },
          },
          {
            entry_number: 80,
            pokedex: {
              name: "kalos-central",
            },
          },
          {
            entry_number: 1,
            pokedex: {
              name: "letsgo-kanto",
            },
          },
          {
            entry_number: 68,
            pokedex: {
              name: "isle-of-armor",
            },
          },
        ],
      },
      {
        id: "8b4bded4-a675-529c-85c2-c5c7331c3d03",
        name: "ivysaur",
        names: [
          {
            name: "フシギソウ",
            language: {
              name: "ja-Hrkt",
            },
          },
          {
            name: "Fushigisou",
            language: {
              name: "roomaji",
            },
          },
          {
            name: "이상해풀",
            language: {
              name: "ko",
            },
          },
          {
            name: "妙蛙草",
            language: {
              name: "zh-Hant",
            },
          },
          {
            name: "Herbizarre",
            language: {
              name: "fr",
            },
          },
          {
            name: "Bisaknosp",
            language: {
              name: "de",
            },
          },
          {
            name: "Ivysaur",
            language: {
              name: "es",
            },
          },
          {
            name: "Ivysaur",
            language: {
              name: "it",
            },
          },
          {
            name: "Ivysaur",
            language: {
              name: "en",
            },
          },
          {
            name: "フシギソウ",
            language: {
              name: "ja",
            },
          },
          {
            name: "妙蛙草",
            language: {
              name: "zh-Hans",
            },
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        },
        pokedex_numbers: [
          {
            entry_number: 2,
            pokedex: {
              name: "national",
            },
          },
          {
            entry_number: 2,
            pokedex: {
              name: "kanto",
            },
          },
          {
            entry_number: 227,
            pokedex: {
              name: "original-johto",
            },
          },
          {
            entry_number: 232,
            pokedex: {
              name: "updated-johto",
            },
          },
          {
            entry_number: 81,
            pokedex: {
              name: "kalos-central",
            },
          },
          {
            entry_number: 2,
            pokedex: {
              name: "letsgo-kanto",
            },
          },
          {
            entry_number: 69,
            pokedex: {
              name: "isle-of-armor",
            },
          },
        ],
      },
      {
        id: "da7b7011-56ad-58ff-bef7-41cd594cd3d7",
        name: "venusaur",
        names: [
          {
            name: "フシギバナ",
            language: {
              name: "ja-Hrkt",
            },
          },
          {
            name: "Fushigibana",
            language: {
              name: "roomaji",
            },
          },
          {
            name: "이상해꽃",
            language: {
              name: "ko",
            },
          },
          {
            name: "妙蛙花",
            language: {
              name: "zh-Hant",
            },
          },
          {
            name: "Florizarre",
            language: {
              name: "fr",
            },
          },
          {
            name: "Bisaflor",
            language: {
              name: "de",
            },
          },
          {
            name: "Venusaur",
            language: {
              name: "es",
            },
          },
          {
            name: "Venusaur",
            language: {
              name: "it",
            },
          },
          {
            name: "Venusaur",
            language: {
              name: "en",
            },
          },
          {
            name: "フシギバナ",
            language: {
              name: "ja",
            },
          },
          {
            name: "妙蛙花",
            language: {
              name: "zh-Hans",
            },
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        },
        pokedex_numbers: [
          {
            entry_number: 3,
            pokedex: {
              name: "national",
            },
          },
          {
            entry_number: 3,
            pokedex: {
              name: "kanto",
            },
          },
          {
            entry_number: 228,
            pokedex: {
              name: "original-johto",
            },
          },
          {
            entry_number: 233,
            pokedex: {
              name: "updated-johto",
            },
          },
          {
            entry_number: 82,
            pokedex: {
              name: "kalos-central",
            },
          },
          {
            entry_number: 3,
            pokedex: {
              name: "letsgo-kanto",
            },
          },
          {
            entry_number: 70,
            pokedex: {
              name: "isle-of-armor",
            },
          },
        ],
      },
    ],
  },
};

jest.mock("../../hooks/usePokemon", () => ({
  __esModule:true,default: () => mockData,
}));

describe("Index page", () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({});
    jest.mock("react-i18next");
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();

  });

  afterAll(() => {
    React.useContext = realUseContext;
  });

  it("renders correctly", () => {
    useContextMock.mockReturnValue("en");
    const container = new ShallowRenderer().render(<IndexPage />);

    expect(container).toMatchSnapshot();
  });
});
