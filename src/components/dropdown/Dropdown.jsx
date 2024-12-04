import "./Dropdown.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`chevron ${isOpen ? "rotate" : ""}`}
        />
      </div>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        <p>{description}</p>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
