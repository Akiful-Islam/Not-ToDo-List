import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import TodoDescription from "@/components/todo-form/TodoDescription";
import TodoTitle from "@/components/todo-form/TodoTitle";
import TodoDueDate from "@/components/todo-form/TodoDueDate";
import TodoPriority from "./todo-form/TodoPriority";
import { Priority, Todo } from "@/lib/data/types";
import { useState } from "react";
import { setLocalTodos } from "@/lib/storeTodos";
const todoSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(1),
  description: z.string().optional(),
  dueDate: z.date({
    required_error: "Please select when you do not want to do this",
    invalid_type_error: "Due date must be a date",
  }),
  priority: z.string().refine(
    (value) => {
      return ["lowest", "low", "normal", "high", "highest"].includes(value);
    },
    { message: "Invalid priority" }
  ),
});

type Props = {
  buttonLabel: string;
  dialogHeader: string;
  dialogDescription: string;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};
const AddTodo: React.FC<Props> = ({
  buttonLabel,
  dialogHeader,
  dialogDescription,
  todos,
  setTodos,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      description: "",
      dueDate: new Date(),
      priority: "normal",
    },
  });

  const onSubmit = (data: z.infer<typeof todoSchema>) => {
    console.log(data);
    const newTodo: Todo = {
      id: todos.length + 1,
      title: data.title,
      description: data.description || "",
      added: new Date(),
      dueDate: data.dueDate,
      priority: data.priority as Priority,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setLocalTodos([...todos, newTodo]);
    form.reset();
    setDialogOpen(false);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{buttonLabel}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogHeader}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <TodoTitle form={form} />
              <TodoDescription form={form} />
              <TodoDueDate form={form} />
              <TodoPriority form={form} />
            </div>
            <DialogFooter>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodo;
