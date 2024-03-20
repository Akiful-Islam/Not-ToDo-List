import React from "react";
import { Filter, Priority } from "@/lib/data/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlidersHorizontal } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SortItem from "./SortItem";
import PriorityItem from "./PriorityItem";

const priorities = [
  {
    value: "lowest",
    label: "Lowest",
  },
  {
    value: "low",
    label: "Low",
  },
  {
    value: "normal",
    label: "Normal",
  },
  {
    value: "high",
    label: "High",
  },
  {
    value: "highest",
    label: "Highest",
  },
];

type Props = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

const FilterTodo: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <SlidersHorizontal className="p-[2px] text-black txt hover:bg-neutral-100 rounded-md transition-all duration-150 ease-out" />
      </PopoverTrigger>
      <PopoverContent>
        <Label className="font-medium text-base">Sort by</Label>
        <div className="my-2 flex flex-col gap-1">
          <SortItem
            filter={filter}
            setFilter={setFilter}
            iconType="01"
            label="Added"
            sortType="added"
          />
          <SortItem
            filter={filter}
            setFilter={setFilter}
            iconType="01"
            label="Due Date"
            sortType="dueDate"
          />
          <SortItem
            filter={filter}
            setFilter={setFilter}
            iconType="AZ"
            label="Title"
            sortType="title"
          />
        </div>

        <Label className="font-medium text-base">Show</Label>
        <RadioGroup
          defaultValue="all"
          className="mt-2 mb-4 flex gap-6"
          onValueChange={(value) => {
            setFilter({
              ...filter,
              complete:
                value === "all" ? "all" : value === "complete" ? true : false,
            });
          }}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="option-all" />
            <Label htmlFor="option-all">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="complete" id="option-complete" />
            <Label htmlFor="option-complete">Complete</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="pending" id="option-pending" />
            <Label htmlFor="option-pending">Pending</Label>
          </div>
        </RadioGroup>

        <Label className="font-medium text-base">Priority</Label>
        <div className="mt-2">
          <div className="flex flex-col justify-between gap-2">
            {priorities.map((priority, index) => (
              <PriorityItem
                key={index}
                filter={filter}
                setFilter={setFilter}
                value={priority.value as Priority}
                label={priority.label}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterTodo;
