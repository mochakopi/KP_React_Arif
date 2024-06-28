import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    name: "",
    description: "",
    deadline: "",
    completed: false,
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState({
    name: "",
    description: "",
    deadline: "",
    completed: false,
  });
  const [totalTasks, setTotalTasks] = useState(0);
  const [deletedTasks, setDeletedTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

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
        completed: false,
      });
      setTotalTasks(totalTasks + 1);
    }
  };

  const handleDeleteTodo = (index) => {
    if (todos[index].completed) {
      setCompletedTasks(completedTasks - 1);
    }
    setTodos(todos.filter((_, i) => i !== index));
    setTotalTasks(totalTasks - 1);
    setDeletedTasks(deletedTasks + 1);
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
      completed: false,
    });
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        const updatedTodo = { ...todo, completed: !todo.completed };
        if (updatedTodo.completed) {
          setCompletedTasks(completedTasks + 1);
        } else {
          setCompletedTasks(completedTasks - 1);
        }
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
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
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Total Tasks: {totalTasks}</h2>
        <h2>Deleted Tasks: {deletedTasks}</h2>
        <h2>Completed Tasks: {completedTasks}</h2>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              todo.completed ? "list-group-item-success" : ""
            }`}
          >
            {editIndex === index ? (
              <div className="d-flex flex-column w-100">
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
                    setEditValue({
                      ...editValue,
                      description: e.target.value,
                    })
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
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(index)}
                  />
                  <div>
                    <h5 className="mb-0">{todo.name}</h5>
                    <p className="mb-0">{todo.description}</p>
                    <p className="mb-0">Deadline: {todo.deadline}</p>
                  </div>
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


