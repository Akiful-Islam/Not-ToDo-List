import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECT_TITLE } from "@/lib/data/projectInfo";
import AddOrUpdateTodo from "./AddOrUpdateTodo";

import { Filter, Todo } from "@/lib/data/types";
import { useEffect, useState } from "react";
import { getLocalTodos } from "@/lib/storeTodos";
import TodoItem from "./TodoItem";
import FilterTodo from "./FilterTodo";
import { filterTodos } from "@/lib/filterTodos";
import { ThemeToggle } from "./ui/theme-toggle";

const TodoBox = () => {
  const [todos, setTodos] = useState<Todo[]>(getLocalTodos());
  const [filter, setFilter] = useState<Filter>({
    sort: {
      by: "added",
      direction: "desc",
    },
    complete: "all",
    priority: [],
  });
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(
    filterTodos(todos, filter)
  );

  useEffect(() => {
    setFilteredTodos(filterTodos(todos, filter));
  }, [filter, todos]);

  return (
    <Card className="2xl:w-1/5 lg:w-2/5">
      <div className="flex justify-end w-full">
        <div className="m-2">
          <ThemeToggle />
        </div>
      </div>
      <CardHeader>
        <CardTitle className="2xl:text-4xl lg:text-3xl">
          {PROJECT_TITLE}
        </CardTitle>
        <CardDescription>Your Not To Do List</CardDescription>
        <div className="pt-4 flex justify-between">
          <FilterTodo filter={filter} setFilter={setFilter} />
          <AddOrUpdateTodo todos={todos} setTodos={setTodos} />
        </div>
      </CardHeader>
      <CardContent className="pl-2">
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            added={todo.added}
            dueDate={todo.dueDate}
            priority={todo.priority}
            completed={todo.completed}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default TodoBox;
