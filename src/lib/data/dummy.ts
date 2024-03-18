import { Todo } from "./types";

export const dummyData: Todo[] = [
  {
    id: 1,
    title: "Learn TypeScript",
    description: "Learn TypeScript for better code quality",
    added: new Date("2022-03-04"),
    dueDate: new Date("2022-04-04"),
    priority: "highest",
    completed: false,
  },
  {
    id: 2,
    title: "Learn React",
    description: "Learn React for building web applications",
    added: new Date("2023-04-05"),
    dueDate: new Date("2023-05-05"),
    priority: "high",
    completed: true,
  },
  {
    id: 3,
    title: "Learn Next.js",
    description: "Learn Next.js for building server-rendered applications",
    added: new Date("2024-02-01"),
    dueDate: new Date("2024-03-01"),
    priority: "normal",
    completed: true,
  },
  {
    id: 4,
    title: "Learn Node.js",
    description: "Learn Node.js for building server applications",
    added: new Date("2024-02-04"),
    dueDate: new Date("2024-03-04"),
    priority: "low",
    completed: false,
  },
  {
    id: 5,
    title: "Learn Express.js",
    description: "Learn Express.js for building server applications",
    added: new Date("2024-01-06"),
    dueDate: new Date("2024-02-06"),
    priority: "lowest",
    completed: false,
  },
];
