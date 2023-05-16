import { useState } from "react";

export const useScroll = (movies, movieList) => {
  const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState(true);
  const [isRightArrowDisabled, setIsRightArrowDisabled] = useState(false);

  //scroll to the left when arrow is clicked
  const howMuchWeScroll = () => {
    //calcul length of each card
    const cardWidth = movieList.current.offsetWidth / movies.length;
    //calcul how much we scroll
    const scrollAmount =
      Math.ceil(movieList.current.offsetWidth / cardWidth) * cardWidth;

    return scrollAmount;
  };

  //scroll to the left when arrow is clicked
  const handleLeftArrowClick = () => {
    const scrollAmount = howMuchWeScroll();

    // we reduce the progression when we click the left arrow
    movieList.current.scrollLeft -= scrollAmount;

    //updating the scrolling pogression with the new scroll
    const newScrollLeft = movieList.current.scrollLeft;

    //arrow is disabled if the new scroll is less than the
    setIsLeftArrowDisabled(newScrollLeft < 600);
    setIsRightArrowDisabled(false);
  };

  //scroll to the right when arrow is clicked
  const handleRightArrowClick = () => {
    const scrollAmount = howMuchWeScroll();

    // we increase the progression when we click the right arrow
    movieList.current.scrollLeft += scrollAmount;

    //updating the scrolling pogression with the new scroll
    const newScrollLeft = movieList.current.scrollLeft;
    console.log(newScrollLeft);

    //arrow is disabled if the new scroll reach the length of the list
    const maxScrollLeft =
      movieList.current.offsetWidth + window.innerHeight * 3;
    console.log(maxScrollLeft);
    setIsLeftArrowDisabled(false);
    setIsRightArrowDisabled(newScrollLeft >= maxScrollLeft);
  };

  return {
    isLeftArrowDisabled,
    isRightArrowDisabled,
    handleRightArrowClick,
    handleLeftArrowClick,
  };
};
