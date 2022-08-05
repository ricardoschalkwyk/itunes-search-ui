import React from "react";
import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";

import "@testing-library/jest-dom";

import FavoritesPage from "../pages/FavoritesPage";

const mock = [
  {
    artistName: "Royal Sadness",
    trackName: "Ali Gatie",
    trackId: 1471588612,
    id: "54f13784-7afe-42c3-a530-5480d33cb44c",
  },
];

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<FavoritesPage />, div);
});

it("Matches Snapshot", () => {
  const tree = renderer.create(<FavoritesPage mock={mock} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Favorites must have mock data", () => {
  render(<FavoritesPage mock={mock} />);
  const element = screen.getByTestId("1");
  expect(element).toHaveTextContent("Ali Gatie");
});
