import PropTypes from "prop-types";
import Tag from "../tag/Tag";
import "./TagList.scss"; // Ajoutez des styles si nécessaire

export default function TagList({ tags }) {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <Tag text={tag} key={index} />
      ))}
    </div>
  );
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
