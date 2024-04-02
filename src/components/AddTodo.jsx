import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  // creating state for for values
  const [input, setinput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input == "") {
      return;
    }
    dispatch(addTodo(input));
    setinput("");
  };
  return (
    <form
      onSubmit={addTodoHandler}
      className="absolute top-[5rem] sm:top-[7rem] p-5 flex-col lg:flex-row lg:p-10 rounded-lg flex justify-center items-center gap-3 lg:gap-[2rem] bg-white"
    >
      <input
        type="text"
        className=" border-b-2 lg:border-b-4 border-zinc-700 pb-2 lg:pb-3 outline-none w-[13rem] lg:w-[35rem] text-xl lg:text-3xl font-semibold  text-zinc-800 px-1 lg:px-4"
        placeholder="Enter your Task "
        onChange={(e) => {
          setinput(e.target.value);
        }}
        value={input}
      />

      <button
        onClick={addTodoHandler}
        type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
