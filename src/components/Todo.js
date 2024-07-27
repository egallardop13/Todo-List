import React, { useReducer, useState } from "react";
import "../App.css";

const todoList = [{}];

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState();
  const [editIndex, setEditIndex] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todos = { priority, title, description, dueDate };
    dispatch({ type: "CREATE", payload: todos });
    console.log("this is todos", todos);
    setTitle("");
    setPriority("");
    setDescription("");
    setDueDate("");
  };
  // const handleUpdate =  (e) => {
  //     e.preventDefault();
  const handleOnClick = (index) => {
    setEditIndex(index);
    setEdit(true);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const todos = { priority, title, description, dueDate };
    dispatch({ type: "UPDATE", payload: todos, index: editIndex });
    console.log("this is todos", todos);
    setEdit(false);
    setEditIndex(null);
  };

  // }
  return (
    <div className="container">
      <div className="container">
        <div className="todos-list">
          Todo List
          {console.log(`this is state.todoList`, state.todoList)}
          <div className="properties">
            {" "}
            # | Todo Title | Todo Priority | Todo Description | Todo DueDate
          </div>
          {state.todoList.map((todo, index) => {
            return (
              <>
                <div className="todos-list" key={index}>
                  <div className="todo">
                    {" "}
                    {index + 1} Todo {todo.title}
                    <div className="todo">
                      <div className="todo">{todo.priority}</div>
                      <div className="todo">{todo.description}</div>
                      <div className="todo">{todo.dueDate}</div>
                    </div>
                    {console.log("this is index", index)}
                    <div className="todo-actions">
                      <button
                        className="btn"
                        onClick={() => handleOnClick(index)}
                      >
                        Update
                      </button>
                      <button className="btn">Delete</button>
                    </div>
                    {console.log("this is edit", edit)}
                  </div>
                </div>
              </>
            );
          })}
          {edit ? (
            <form className="todos-list" id="editForm" onSubmit={handleUpdate}>
              <div className="todos-list">
                <div className="todo-title">
                  <h2>Title</h2>
                  <input
                    type="text"
                    required
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    placeholder={state.todoList[editIndex].title}
                  />
                </div>
                <div className="todo-title">
                  <h2>Priority</h2>
                  <input
                    type="text"
                    required
                    onChange={(e) => {
                      setPriority(e.target.value);
                    }}
                    placeholder={state.todoList[editIndex].priority}
                  />
                </div>
                <div className="todo-title">
                  <h2>Description</h2>
                  <input
                    type="text"
                    required
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    placeholder={state.todoList[editIndex].description}
                  />
                </div>
                <div className="todo-title">
                  <h2>DueDate</h2>
                  <input
                    type="text"
                    required
                    onChange={(e) => {
                      setDueDate(e.target.value);
                    }}
                    placeholder={state.todoList[editIndex].dueDate}
                  />
                </div>
                <div className="todo-actions">
                  <button className="btn" type="submit">
                    Edit
                  </button>
                </div>
              </div>
            </form>
          ) : null}
          {/* <div className='todo'> */}
        </div>
      </div>
      {/* {state.create ? */}
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="todos-list">
          <div className="todo-title">
            <h2>Title</h2>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Enter Todo Title"
            />
          </div>
          <div className="todo-title">
            <h2>Priority</h2>
            <input
              type="text"
              onChange={(e) => {
                setPriority(e.target.value);
              }}
              placeholder="Enter Todo Title"
            />
          </div>
          <div className="todo-title">
            <h2>Description</h2>
            <input
              type="text"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Enter Todo Description"
            />
          </div>
          <div className="todo-title">
            <h2>DueDate</h2>
            <input
              type="text"
              onChange={(e) => {
                setDueDate(e.target.value);
              }}
              placeholder="Enter Todo Description"
            />
          </div>
          <div className="todo-actions">
            <button className="btn" type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
      {/* : null}  */}

      {/* </div> */}
      <div className="todo-form"></div>
    </div>
  );
};

const initialState = { todoList: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      console.log("this is state in action", state);
      console.log("this is state in action", action.payload);

      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    case "UPDATE": {
      state.todoList[action.index] = action.payload;
      return { ...state, todoList: [...state.todoList] };
    }
    case "DELETE":
      return { count: state.count - 1 };
    default:
      throw state;
  }
};
export default Todo;
