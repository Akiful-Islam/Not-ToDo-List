import { Todo } from "./types";

export const dummyData: Todo[] = [
  {
    id: 1,
    title: "Learn TypeScript",
    description: "Learn TypeScript for better code quality",
    added: new Date("2022-03-04"),
    priority: "highest",
    completed: false,
  },
  {
    id: 2,
    title: "Learn React",
    description: "Learn React for building web applications",
    added: new Date("2023-04-05"),
    priority: "high",
    completed: false,
  },
  {
    id: 3,
    title: "Learn Next.js",
    description: "Learn Next.js for building server-rendered applications",
    added: new Date("2024-02-01"),
    priority: "normal",
    completed: false,
  },
  {
    id: 4,
    title: "Learn Node.js",
    description: "Learn Node.js for building server applications",
    added: new Date("2024-02-04"),
    priority: "low",
    completed: false,
  },
  {
    id: 5,
    title: "Learn Express.js",
    description: "Learn Express.js for building server applications",
    added: new Date("2024-01-06"),
    priority: "lowest",
    completed: false,
  },
];
