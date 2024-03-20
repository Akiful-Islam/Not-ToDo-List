export type Priority = "lowest" | "low" | "normal" | "high" | "highest";

export type Todo = {
  id: number;
  title: string;
  description: string;
  added: Date;
  dueDate: Date;
  priority: Priority;
  completed: boolean;
};

export type Filter = {
  sort: {
    by: "added" | "dueDate" | "title";
    direction: "asc" | "desc";
  };
  complete: boolean | "all";
  priority?: Priority[];
};
