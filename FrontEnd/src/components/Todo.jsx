import React from "react";
// Import icons from react-icons
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ text, updateMode, deleteTodo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        {/* Fix event handler casing to onClick */}
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default Todo;
