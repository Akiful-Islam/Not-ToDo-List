import { Priority } from "@/lib/data/types";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
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

type Props = {
  title: string;
  description: string;
  added: Date;
  dueDate: Date;
  priority: Priority;
  completed: boolean;
};

const TodoItem: React.FC<Props> = ({
  title,
  description,
  added,
  dueDate,
  priority,
  completed,
}) => {
  const [complete, setComplete] = useState(completed);
  return (
    <Card className="hover:scale-105 transition-all ease-in-out duration-100 m-2">
      <CardContent
        className={`px-4 py-2 text-left flex justify-between ${
          complete ? "line-through" : ""
        }`}
      >
        <Dialog>
          <DialogTrigger>
            <Label
              className={`hover:underline transition-all ease-in duration-75`}
            >
              {title}
            </Label>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {/* <DialogFooter className="flex justify-between">
              <p className="font-normal text-lg">
                Added on: {added.toLocaleDateString()}
              </p>
              <p className="font-normal text-lg">
                Due: {dueDate.toLocaleDateString()}
              </p>
            </DialogFooter> */}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
