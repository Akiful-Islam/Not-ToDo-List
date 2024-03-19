import { Priority, Todo } from "@/lib/data/types";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { setLocalTodos } from "@/lib/storeTodos";
import AddOrUpdateTodo from "./AddOrUpdateTodo";

type Props = {
  id: number;
  title: string;
  description: string;
  added: Date;
  dueDate: Date;
  priority: Priority;
  completed: boolean;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

const priorityColor = {
  lowest: "text-green-400",
  low: "text-green-500",
  normal: "text-blue-500",
  high: "text-yellow-500",
  highest: "text-red-500",
};

const TodoItem: React.FC<Props> = ({
  id,
  title,
  description,
  added,
  dueDate,
  priority,
  completed,
  todos,
  setTodos,
}) => {
  const [complete, setComplete] = useState(completed);

  const [dialogOpen, setDialogOpen] = useState(false);

  const dateAdded = new Date(added).toDateString();
  const dateDue = new Date(dueDate).toDateString();

  const onCheck = () => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
    setLocalTodos(newTodos);
    setComplete(!complete);
  };
  const onDelete = () => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setLocalTodos(newTodos);
    setDialogOpen(false);
  };

  const handleTodoClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id !== "todo-check") {
      setDialogOpen(!dialogOpen);
    }
  };
  return (
    <Card className="hover:scale-105 2xl:hover:scale-[1.01] xl:hover:scale-[1.02] lg:hover:scale-[1.03] transition-all ease-in-out duration-100 m-2 cursor-pointer w-full mb-4">
      <CardContent
        className={`px-4 py-2 text-left flex justify-between ${
          complete ? "line-through" : ""
        }`}
        onClick={handleTodoClick}
      >
        <Label
          className={`hover:underline transition-all ease-in duration-75 cursor-pointer`}
        >
          {title}
        </Label>
        <Checkbox
          id="todo-check"
          defaultChecked={complete}
          onCheckedChange={onCheck}
        />
      </CardContent>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">{title}</DialogTitle>
            <DialogDescription className="text-lg font-medium">
              {description}
            </DialogDescription>
          </DialogHeader>
          <Label
            className={`text-base font-medium ${
              complete ? "text-green-500" : "text-yellow-500"
            }`}
          >
            {complete ? "Completed" : "Pending"}
          </Label>
          <Label
            className={`text-base font-medium ${priorityColor[priority]} ${
              priority === "highest" ? "animate-pulse" : ""
            }`}
          >
            Priority: {priority}
          </Label>
          <Label className="text-base font-medium">Due Within: {dateDue}</Label>
          <Label className="text-base font-light">Added: {dateAdded}</Label>
          <DialogFooter className="">
            <Button variant={"destructive"} onClick={onDelete}>
              Delete
            </Button>
            <AddOrUpdateTodo
              todos={todos}
              setTodos={setTodos}
              defaultTodo={{
                id,
                title,
                description,
                added,
                dueDate,
                priority,
                completed,
              }}
            />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default TodoItem;
