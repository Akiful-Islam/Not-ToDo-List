import React from "react";
import { Filter } from "@/lib/data/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ArrowDown01Icon,
  ArrowDownAzIcon,
  ArrowUp01Icon,
  ArrowUpAZIcon,
  ArrowUpDownIcon,
  SlidersHorizontal,
} from "lucide-react";
import { Label } from "@radix-ui/react-label";

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
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex justify-between hover:bg-neutral-100 rounded-md transition-all duration-150 ease-out cursor-pointer">
            <Label htmlFor="added-sort" className="cursor-pointer">
              Added on
            </Label>
            {filter.sort.by === "added" ? (
              filter.sort.direction === "asc" ? (
                <ArrowDown01Icon className="p-[3px]" />
              ) : (
                <ArrowUp01Icon className="p-[3px]" />
              )
            ) : (
              <ArrowUpDownIcon className="p-[5px]" />
            )}
          </div>
          <div className="flex justify-between hover:bg-neutral-100 rounded-md transition-all duration-150 ease-out cursor-pointer">
            <Label htmlFor="due-sort" className="cursor-pointer">
              Due Date
            </Label>
            {filter.sort.by === "dueDate" ? (
              filter.sort.direction === "asc" ? (
                <ArrowDown01Icon className="p-[3px]" />
              ) : (
                <ArrowUp01Icon className="p-[3px]" />
              )
            ) : (
              <ArrowUpDownIcon className="p-[5px]" />
            )}
          </div>
          <div className="flex justify-between hover:bg-neutral-100 rounded-md transition-all duration-150 ease-out cursor-pointer">
            <Label htmlFor="title-sort" className="cursor-pointer">
              Title
            </Label>
            {filter.sort.by === "title" ? (
              filter.sort.direction === "asc" ? (
                <ArrowDownAzIcon className="p-[3px]" />
              ) : (
                <ArrowUpAZIcon className="p-[3px]" />
              )
            ) : (
              <ArrowUpDownIcon className="p-[5px]" />
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterTodo;
