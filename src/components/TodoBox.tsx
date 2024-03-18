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

const TodoBox = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const localTodos = getLocalTodos();
    if (localTodos) {
      setTodos(localTodos);
    }
  }, []);

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
        <DataTable columns={todoColumns} data={todos} />
      </CardContent>
    </Card>
  );
};

export default TodoBox;
