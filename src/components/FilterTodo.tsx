import React from "react";
import { Filter } from "@/lib/data/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowDownAZIcon, SlidersHorizontal } from "lucide-react";
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
            <Label htmlFor="title-sort" className="cursor-pointer">
              Title
            </Label>
            <ArrowDownAZIcon className="w-4 h-4" />
          </div>
          <div className="flex justify-between hover:bg-neutral-100 rounded-md transition-all duration-150 ease-out cursor-pointer">
            <Label htmlFor="due-sort" className="cursor-pointer">
              Due Date
            </Label>
            <ArrowDownAZIcon className="w-4 h-4" />
          </div>
          <div className="flex justify-between hover:bg-neutral-100 rounded-md transition-all duration-150 ease-out cursor-pointer">
            <Label htmlFor="added-sort" className="cursor-pointer">
              Added on
            </Label>
            <ArrowDownAZIcon className="w-4 h-4" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterTodo;
