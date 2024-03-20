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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

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
        <Label className="font-medium text-base">Show</Label>
        <RadioGroup defaultValue="option-one" className="mt-2 mb-4 flex gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-all" id="option-all" />
            <Label htmlFor="option-all">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-complete" id="option-complete" />
            <Label htmlFor="option-complete">Complete</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-pending" id="option-pending" />
            <Label htmlFor="option-pending">Pending</Label>
          </div>
        </RadioGroup>
      </PopoverContent>
    </Popover>
  );
};

export default FilterTodo;
