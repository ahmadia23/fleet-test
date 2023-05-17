import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ArrowButtons.css";

const ArrowButtons = ({
  arrowSide,
  isLeftArrowDisabled,
  isRightArrowDisabled,
  onClick,
}) => {
  return (
    <div>
      {arrowSide === "left" ? (
        <button
          className={
            isLeftArrowDisabled
              ? "arrow left-arrow disabled"
              : "arrow left-arrow"
          }
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      ) : (
        <button
          className={
            isRightArrowDisabled
              ? "arrow right-arrow disabled"
              : "arrow right-arrow"
          }
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      )}
    </div>
  );
};

export default ArrowButtons;
