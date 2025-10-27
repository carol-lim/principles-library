import React, { useState } from "react";
import { categoryColors } from "../data/principles";

const PrincipleCard = ({ principle, onEdit, onDelete }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleCardClick = () => {
    if (!showMenu) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setShowMenu(false);
    onEdit(principle);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    setShowMenu(false);
    onDelete(principle.id);
  };

  return (
    <div
      className={`principle-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
      style={{
        "--category-color": categoryColors[principle.category],
      }}
    >
      <div className="card-inner">
        {/* Front of card */}
        <div className="card-front">
          <div className="card-category-tag">
            {principle.category.split(" & ")[0]}
          </div>
          <h3 className="card-title">{principle.name}</h3>
          <div className="card-hint">Click to flip</div>
          <button className="card-menu-btn" onClick={handleMenuClick}>
            ⋮
          </button>
          {showMenu && (
            <div className="card-menu">
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>

        {/* Back of card */}
        <div className="card-back">
          <div className="card-category-tag">
            {principle.category.split(" & ")[0]}
          </div>
          <p className="card-definition">{principle.definition}</p>
          <div className="card-hint">Click to flip back</div>
        </div>
      </div>
    </div>
  );
};

export default PrincipleCard;
