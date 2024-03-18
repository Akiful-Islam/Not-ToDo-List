export type Todo = {
  id: number;
  title: string;
  description: string;
  added: Date;
  dueDate: Date;
  priority: "lowest" | "low" | "normal" | "high" | "highest";
  completed: boolean;
};
