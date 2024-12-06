import PropTypes from "prop-types";
import "./Tag.scss"; // Ajoutez des styles si nécessaire

export default function Tag({ text }) {
  return <div className="tag"><p>{text}</p></div>;
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};
