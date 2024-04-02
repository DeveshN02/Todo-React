import { useEffect } from "react";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1200, offset: 120, delay: 100 });
  });
  return (
    <div className="w-full  min-h-screen bg-zinc-900 px-2 lg:px-[5%] pb-52">
      <Navbar />
      <div
        data-aos="fade-down"
        className="flex h-fit pb-20 flex-col mx-auto w-[80%]"
      >
        <h1 class="mb-20 text-3xl mt-40 text-center  font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <p class="text-transparent bg-clip-text bg-gradient-to-r text-center to-emerald-600 from-sky-400">
            Empower Your Productivity
          </p>{" "}
          Your Tasks, Your Time, Your Way.
        </h1>
        <p class="text-lg font-normal text-gray-400 lg:text-2xl text-center dark:text-gray-400">
          After all, productivity isn't just about getting things done; it's
          about getting the right things done, efficiently and effectively. With
          our intuitive todo app, you can prioritize, schedule, and track your
          tasks seamlessly, giving you the freedom to focus on what truly
          matters. Say goodbye to the chaos of scattered to-do lists and hello
          to a more organized, productive you. Take charge of your day, and
          conquer your goals with ease.
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="relative w-[90%] sm:w-[80%] mx-auto flex flex-col bg-green-300 rounded-3xl  justify-center items-center "
      >
        <p className="text-zinc-800 font-bold text-xl lg:text-3xl lg:font-semibold rounded-xl bg-green-200 w-[95%] lg:w-[80%] mt-5 h-[7rem] lg:h-[10rem] text-center py-2 lg:py-5 ">
          Todo List
        </p>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
