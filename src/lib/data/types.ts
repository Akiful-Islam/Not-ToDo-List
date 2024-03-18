export type Todo = {
  id: number;
  title: string;
  description: string;
  added: Date;
  due: Date;
  priority: "lowest" | "low" | "normal" | "high" | "highest";
  completed: boolean;
};
