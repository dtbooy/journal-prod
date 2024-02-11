// import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategorySelection = ({ categories }) => {
  return (
    <>
      <h3>Please select a Category</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/entry/new/${index}`}>{category.name} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

CategorySelection.propTypes = {
  categories: PropTypes.array
}

export default CategorySelection;
