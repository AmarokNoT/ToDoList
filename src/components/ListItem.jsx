/* eslint-disable react/prop-types */

import { useState } from "react";

export default function ListItem({ itemData, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(itemData.content);

  const handleSave = () => {
    editTodo(itemData.id, newContent); // Sauvegarder les modifications
    setIsEditing(false); // Quitter le mode édition
  };

  return (
    <li className="p-2 bg-zinc-200 mb-2 rounded flex items-center">
      {isEditing ? (
        <input
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="mr-2 p-1 rounded border border-gray-400 flex-grow"
        />
      ) : (
        <span className="flex-grow">{itemData.content}</span>
      )}

      {isEditing ? (
        <button
          onClick={handleSave}
          className="ml-2 bg-green-600 text-white px-2 py-1 rounded"
        >
          Valider
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="ml-2 bg-blue-600 text-white px-2 py-1 rounded"
        >
          Éditer
        </button>
      )}

      <button
        onClick={() => deleteTodo(itemData.id)}
        className="ml-2 bg-red-600 text-white px-2 py-1 rounded"
      >
        Supprimer
      </button>
    </li>
  );
}
