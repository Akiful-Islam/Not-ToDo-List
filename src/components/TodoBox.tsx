import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECT_TITLE } from "@/lib/data/projectInfo";
import AddTodo from "./AddTodo";
import { dummyData } from "@/lib/data/dummy";
import { DataTable } from "@/components/ui/custom/data-table";

import { Todo } from "@/lib/data/types";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";

const columns: ColumnDef<Todo>[] = [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Priority",
    accessorKey: "priority",
    cell: ({ row }) => {
      const priority: string = row.getValue("priority") as string;
      return priority.charAt(0).toUpperCase() + priority.slice(1);
    },
  },
  {
    header: "Due Date",
    accessorKey: "dueDate",
    cell: ({ row }) => (row.getValue("dueDate") as Date).toUTCString(),
  },
  {
    header: "Status",
    accessorKey: "completed",
    cell: ({ row }) => (row.getValue("completed") ? "Completed" : "Pending"),
  },
];

const TodoBox = () => {
  const [todos, setTodos] = useState(dummyData);

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
        <DataTable columns={columns} data={todos} />
      </CardContent>
    </Card>
  );
};

export default TodoBox;
