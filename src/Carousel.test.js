import React from "react";
import { render, fireEvent, getByTestId, queryByAltText } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("renders a component", function() {
  render(<Carousel/>)
})

it("renders a component", function() {
  const {asFragment} = render(<Carousel/>)
  expect(asFragment()).toMatchSnapshot()
})


it("works when you click on the left arrow", function() {
  const { getByTestId, queryByAltText} = render(<Carousel />)
  const rightArrow = getByTestId('right-arrow')
  fireEvent.click(rightArrow)
  const leftArrow = getByTestId('left-arrow')
  fireEvent.click(leftArrow)
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();

})

it("has no left arrow on first pic", function() {
  const { queryByTestId} = render(<Carousel />)
  const leftArrow = queryByTestId('left-arrow')
  console.log(leftArrow)
  expect(leftArrow).toEqual(null);

})

it("has no right arrow on last pic", function() {
  const { getByTestId, queryByTestId} = render(<Carousel />)
  const rightArrow = getByTestId('right-arrow')
  fireEvent.click(rightArrow)
  const secondArrow = getByTestId('right-arrow')
  fireEvent.click(secondArrow)
  const noArrow = queryByTestId('right-arrow')
  expect(noArrow).toEqual(null);

})