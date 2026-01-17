import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="px-6 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all active:scale-95"
    >
      {props.text}
    </button>
  );
};

export default Button;
