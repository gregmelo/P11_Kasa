import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropsType from "prop-types";
import "./StarRating.scss";

export default function StarRating({ rating }) {
  const totalStars = 5;

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={index < rating ? "star-filled" : "star-empty"}
        />
      ))}
    </div>
  );
}

StarRating.propTypes = {
  rating: PropsType.number.isRequired,
};
