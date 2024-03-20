import { Filter, Todo } from "./data/types";

export const filterTodos = (todos: Todo[], filter: Filter): Todo[] => {
  let filteredTodos = todos;

  if (filter.complete !== "all") {
    filteredTodos = filteredTodos.filter(
      (todo) => todo.completed === filter.complete
    );
  }

  if (filter.priority.length > 0) {
    filteredTodos = filteredTodos.filter((todo) =>
      filter.priority.includes(todo.priority)
    );
  }

  filteredTodos.sort((a, b) => {
    let comparison = 0;

    switch (filter.sort.by) {
      case "added":
        comparison =
          getNewDate(a.added).getTime() - getNewDate(b.added).getTime();
        break;
      case "dueDate":
        comparison =
          getNewDate(a.dueDate).getTime() - getNewDate(b.dueDate).getTime();
        break;
      case "title":
        comparison = a.title.localeCompare(b.title);
        break;
    }

    return filter.sort.direction === "asc" ? comparison : -comparison;
  });

  return filteredTodos;
};

const getNewDate = (date: Date) => {
  return new Date(date);
};
