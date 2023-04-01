import React from "react";
import { FaSearch } from "react-icons/fa";
import { useFilterContext } from "../Context/FilterContext";

const SearchProduct = (props) => {
//   const { text, updateFilterValue } = useFilterContext();

    
  return (
    <>
      <div>
        <div className="input-group search-input">
          <input
            type="text"
            className="form-control input"
            value={props.val}
            name="text"
            onChange={props.change}
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
          <span className="input-group-text" id="basic-addon1">
            <FaSearch className="search-icon" />
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchProduct;
