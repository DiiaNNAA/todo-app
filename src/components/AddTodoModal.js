import React, { useState, useEffect } from "react";

function AddTodoModal({ addTodo, editTodo, editingTodo, closeModal }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
    }
  }, [editingTodo]);

  const handleSave = () => {
    if (editingTodo) {
      editTodo(editingTodo.id, text);
    } else {
      addTodo(text);
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">
          {editingTodo ? "Edit Todo" : "Add Todo"}
        </h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
        <button onClick={closeModal} className="ml-2 bg-gray-300 px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddTodoModal;
