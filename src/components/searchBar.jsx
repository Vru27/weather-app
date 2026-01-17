import React from "react";

const SearchBar = (props) => {
  return (
    <input
      type="text"
      onChange={props.onChange}
      placeholder={props.placeholder}
      className="flex-1 px-4 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-foreground placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm transition-all"
    ></input>
  );
};

export default SearchBar;
