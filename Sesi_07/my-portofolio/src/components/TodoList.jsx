import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    name: "",
    description: "",
    deadline: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState({
    name: "",
    description: "",
    deadline: "",
  });

  const [totalTasks, setTotalTasks] = useState(0);

  const handleAddTodo = () => {
    if (
      newTodo.name.trim() !== "" &&
      newTodo.description.trim() !== "" &&
      newTodo.deadline.trim() !== ""
    ) {
      setTodos([...todos, newTodo]);
      setNewTodo({
        name: "",
        description: "",
        deadline: "",
      });
      setTotalTasks(totalTasks + 1);

    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    setTotalTasks(totalTasks - 1);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const handleSaveEdit = () => {
    const updatedTodos = todos.map((todo, index) =>
      index === editIndex ? editValue : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditValue({
      name: "",
      description: "",
      deadline: "",
    });
  };

  return (
    <div className="container">
      <h1 className="mt-5">Todo List</h1>
      <p>
        Menu ini digunakan untuk menambahkan, mengedit, dan menghapus todo list.
      </p>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Name"
          value={newTodo.name}
          onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
          required
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
          required
        />
        <input
          type="date"
          className="form-control mb-2"
          placeholder="Deadline"
          value={newTodo.deadline}
          onChange={(e) => setNewTodo({ ...newTodo, deadline: e.target.value })}
          required
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          <i className="fas fa-plus"></i> Add Todo
        </button>
      </div>
      <h2>Total Tasks: {totalTasks}</h2>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {editIndex === index ? (
              <div className="d-flex flex-column">
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editValue.name}
                  onChange={(e) =>
                    setEditValue({ ...editValue, name: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editValue.description}
                  onChange={(e) =>
                    setEditValue({ ...editValue, description: e.target.value })
                  }
                  required
                />
                <input
                  type="date"
                  className="form-control mb-2"
                  value={editValue.deadline}
                  onChange={(e) =>
                    setEditValue({ ...editValue, deadline: e.target.value })
                  }
                  required
                />
                <button className="btn btn-success" onClick={handleSaveEdit}>
                  <i className="fas fa-save"></i> Save
                </button>
              </div>
            ) : (
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{todo.name}</h5>
                  <p>{todo.description}</p>
                  <p>Deadline: {todo.deadline}</p>
                </div>
                <div>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => handleEditTodo(index)}
                  >
                    <i className="fas fa-edit"></i> Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    <i className="fas fa-trash"></i> Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
