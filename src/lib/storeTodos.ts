import { dummyData } from "./data/dummy";
import { Todo } from "./data/types";

export const getLocalTodos = () => {
  const localTodos = localStorage.getItem("todos");
  if (localTodos) {
    try {
      const parsedTodos = JSON.parse(localTodos);
      return parsedTodos;
    } catch (error) {
      console.error("Error parsing stored todos:", error);
    }
  }
  setLocalTodos(dummyData);
  return dummyData;
};

export const setLocalTodos = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
