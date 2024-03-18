import { Todo } from "./types";

export const dummyData: Todo[] = [
  {
    id: 1,
    title: "Survive Monday Morning",
    description: "Summon the strength to go to work and face the week ahead",
    added: new Date("2022-03-04"),
    dueDate: new Date("2022-04-04"),
    priority: "highest",
    completed: false,
  },
  {
    id: 2,
    title: "Tackle the Dreaded Inbox",
    description: "Conquer the overflowing email inbox and achieve inbox zero",
    added: new Date("2023-04-05"),
    dueDate: new Date("2023-05-05"),
    priority: "high",
    completed: true,
  },
  {
    id: 3,
    title: "Conquer the Commute",
    description: "Find the most efficient route and survive the daily commute",
    added: new Date("2024-02-01"),
    dueDate: new Date("2024-03-01"),
    priority: "normal",
    completed: true,
  },
  {
    id: 4,
    title: "Lunch Break Bliss",
    description: "Discover new lunch spots and enjoy a satisfying midday meal",
    added: new Date("2024-02-04"),
    dueDate: new Date("2024-03-04"),
    priority: "low",
    completed: false,
  },
  {
    id: 5,
    title: "Unwind After Work",
    description:
      "Engage in relaxing activities to unwind after a long day at work",
    added: new Date("2024-01-06"),
    dueDate: new Date("2024-02-06"),
    priority: "lowest",
    completed: false,
  },
];
