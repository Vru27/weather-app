import React from "react";

const SearchBar = (props) => {
  return (
    <input type="text" value={props.value} onChange={props.onChange}></input>
  );
};

export default SearchBar;
