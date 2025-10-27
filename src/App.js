import React, { useState } from "react";
import PrincipleCard from "./components/PrincipleCard";
import AddCardModal from "./components/AddCardModal";
import FloatingActionButton from "./components/FloatingActionButton";
import { initialPrinciples } from "./data/principles";
import "./styles/App.css";

function App() {
  const [principles, setPrinciples] = useState(initialPrinciples);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPrinciple, setEditingPrinciple] = useState(null);

  const handleAddCard = () => {
    setEditingPrinciple(null);
    setIsModalOpen(true);
  };

  const handleEditCard = (principle) => {
    setEditingPrinciple(principle);
    setIsModalOpen(true);
  };

  const handleDeleteCard = (id) => {
    if (window.confirm("Are you sure you want to delete this principle?")) {
      setPrinciples(principles.filter((p) => p.id !== id));
    }
  };

  const handleSaveCard = (principleData) => {
    if (editingPrinciple) {
      // Update existing principle
      setPrinciples(
        principles.map((p) => (p.id === principleData.id ? principleData : p))
      );
    } else {
      // Add new principle
      setPrinciples([...principles, principleData]);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Principles Library</h1>
        <p>Click on cards to flip and learn</p>
      </header>

      <main className="principles-grid">
        {principles.map((principle) => (
          <PrincipleCard
            key={principle.id}
            principle={principle}
            onEdit={handleEditCard}
            onDelete={handleDeleteCard}
          />
        ))}
      </main>

      <FloatingActionButton onClick={handleAddCard} />

      <AddCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveCard}
        editingPrinciple={editingPrinciple}
      />
    </div>
  );
}

export default App;
