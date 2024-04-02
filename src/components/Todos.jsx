import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { useState } from "react";

const Todos = () => {
  // fetching state from todoSlice

  const [complete, setComplete] = useState(false);

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  return (
    <div className="w-full min-h-[40rem] flex flex-col items-center gap-6 lg:gap-8 justify-center py-40">
      {todos.map((todo) => (
        <div className="flex flex-row items-center justify-between bg-zinc-800 rounded-lg py-2 px-2 w-[90%]  lg:w-1/2">
          <h1
            key={todo.id}
            className="text-white font-bold text-xl sm:text-2xl px-2 "
          >
            {todo.task}
          </h1>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
