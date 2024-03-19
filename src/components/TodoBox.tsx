import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECT_TITLE } from "@/lib/data/projectInfo";
import AddTodo from "./AddTodo";

import { Todo } from "@/lib/data/types";
import { useState } from "react";
import { getLocalTodos } from "@/lib/storeTodos";
import TodoItem from "./TodoItem";

const TodoBox = () => {
  const [todos, setTodos] = useState<Todo[]>(getLocalTodos());

  return (
    <Card className="2xl:w-2/5 lg:w-2/5">
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
      <CardContent className="pl-2">
        {todos.map((todo, index) => (
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
