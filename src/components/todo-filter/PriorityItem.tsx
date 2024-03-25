import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, Priority } from "@/lib/data/types";

type Props = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  value: Priority;
  label: string;
};

const PriorityItem: React.FC<Props> = ({ filter, setFilter, value, label }) => {
  return (
    <div className="flex items-center space-x-2 hover:text-primary transition-colors duration-150">
      <Checkbox
        id={value}
        checked={filter.priority.includes(value)}
        onCheckedChange={(checked) => {
          if (checked) {
            setFilter({
              ...filter,
              priority: [...filter.priority, value],
            });
          } else {
            setFilter({
              ...filter,
              priority: filter.priority.filter((p) => p !== value),
            });
          }
        }}
      />
      <Label htmlFor={value}>{label}</Label>
    </div>
  );
};

export default PriorityItem;
