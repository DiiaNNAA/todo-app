import React from "react";

function TodoList({ todos, toggleCompletion, deleteTodo, setEditingTodo, setIsModalOpen }) {
  return (
    <div className="p-4">
      {todos.length === 0 && <p className="text-center text-gray-500">No todos yet!</p>}
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center p-2 bg-gray-200 rounded my-2"
        >
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)}
            />
            <span className={todo.completed ? "line-through ml-2" : "ml-2"}>
              {todo.text}
            </span>
          </div>
          <div>
            <button
              className="mr-2 text-blue-500"
              onClick={() => {
                setEditingTodo(todo);
                setIsModalOpen(true);
              }}
            >
              Edit
            </button>
            <button
              className="text-red-500"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
