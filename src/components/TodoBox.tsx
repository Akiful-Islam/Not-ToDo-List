import { PROJECT_TITLE } from "@/lib/data/projectInfo";
import AddTodo from "./AddTodo";

const TodoBox = () => {
  return (
    <div
      className={`h-[80vh] w-[25vw] bg-gray-300
                m-12 py-8 px-4 rounded-lg
                transition-all ease-linear duration-100 hover:shadow-lg hover:scale-[1.01]`}
    >
      <div
        className={`mb-6 flex justify-between items-center
      `}
      >
        <h1 className="text-4xl font-extrabold font-serif tracking-tight lg:text-5xl">
          {PROJECT_TITLE}
        </h1>
        <AddTodo
          buttonLabel="Add New"
          dialogHeader="Add A New not To Do"
          dialogDescription="Don't do it!"
        />
      </div>
    </div>
  );
};

export default TodoBox;
