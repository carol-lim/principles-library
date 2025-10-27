import React from "react";

const FloatingActionButton = ({ onClick }) => {
  return (
    <button className="floating-action-btn" onClick={onClick}>
      <span>+</span>
    </button>
  );
};

export default FloatingActionButton;
