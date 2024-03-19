import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECT_TITLE } from "@/lib/data/projectInfo";
import AddTodo from "./AddTodo";
import { DataTable } from "@/components/ui/custom/data-table";

import { Todo } from "@/lib/data/types";
import { useEffect, useState } from "react";
import { getLocalTodos } from "@/lib/storeTodos";
import { todoColumns } from "./TodoColumns";
import TodoItem from "./TodoItem";

const TodoBox = () => {
  const [todos, setTodos] = useState<Todo[]>(getLocalTodos());

  return (
    <Card>
      <CardHeader>
        <CardTitle>{PROJECT_TITLE}</CardTitle>
        <CardDescription>Your Not To Do List</CardDescription>
        <AddTodo
          buttonLabel="Add New"
          dialogHeader="Add A New not To Do"
          dialogDescription="Don't do it!"
          todos={todos}
          setTodos={setTodos}
        />
      </CardHeader>
      <CardContent>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            title={todo.title}
            description={todo.description}
            added={todo.added}
            dueDate={todo.dueDate}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default TodoBox;
