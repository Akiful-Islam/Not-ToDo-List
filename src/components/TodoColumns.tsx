import { Todo } from "@/lib/data/types";
import { ColumnDef } from "@tanstack/react-table";

export const todoColumns: ColumnDef<Todo>[] = [
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
