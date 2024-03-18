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

const columns: ColumnDef<Todo>[] = [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Priority",
    accessorKey: "priority",
  },
  {
    header: "Due Date",
    accessorKey: "due",
    cell: ({ row }) => (row.getValue("due") as Date).toUTCString(),
  },
  {
    header: "Status",
    accessorKey: "completed",
    cell: ({ row }) => (row.getValue("completed") ? "Completed" : "Pending"),
  },
];

const TodoBox = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{PROJECT_TITLE}</CardTitle>
        <CardDescription>Your Not To Do List</CardDescription>
        <AddTodo
          buttonLabel="Add New"
          dialogHeader="Add A New not To Do"
          dialogDescription="Don't do it!"
        />
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={dummyData} />
      </CardContent>
    </Card>
  );
};

export default TodoBox;
