import React, { useState } from "react";
import { categories } from "../data/principles";

const AddCardModal = ({ isOpen, onClose, onSave, editingPrinciple }) => {
  const [formData, setFormData] = useState({
    name: "",
    definition: "",
    category: categories.PROBLEM_SOLVING,
  });

  React.useEffect(() => {
    if (editingPrinciple) {
      setFormData(editingPrinciple);
    } else {
      setFormData({
        name: "",
        definition: "",
        category: categories.PROBLEM_SOLVING,
      });
    }
  }, [editingPrinciple, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.definition.trim()) {
      onSave({
        ...formData,
        id: editingPrinciple ? editingPrinciple.id : Date.now(),
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{editingPrinciple ? "Edit Principle" : "Add New Principle"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Principle Name:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Definition:</label>
            <textarea
              value={formData.definition}
              onChange={(e) =>
                setFormData({ ...formData, definition: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Category:</label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              {Object.values(categories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
