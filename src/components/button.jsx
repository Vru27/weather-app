import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="p-2 bg-blue-500 text-black rounded-md shadow-md hover:border-none"
    >
      {props.text}
    </button>
  );
};

export default Button;
