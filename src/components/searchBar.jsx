import React from "react";

const SearchBar = (props) => {
  return (
    <input
      type="text"
      onChange={props.onChange}
      placeholder={props.placeholder}
      className="p-2 shadow-md rounded-md m-6"
    ></input>
  );
};

export default SearchBar;
