export type Todo = {
  id: number;
  title: string;
  description: string;
  added: Date;
  priority: "lowest" | "low" | "normal" | "high" | "highest";
  completed: boolean;
};
