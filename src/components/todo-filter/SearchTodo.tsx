import { Filter } from "@/lib/data/types";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

const SearchTodo: React.FC<Props> = ({ filter, setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onSearch = (searchTerm: string) => {
    setFilter({
      ...filter,
      searchTerm,
    });
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <Search
          className="text-popover-foreground txt hover:bg-accent rounded-md transition-all duration-150 ease-out"
          size="1.25rem"
        />
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex items-center gap-2">
          <Input
            id="search-input"
            defaultValue={filter.searchTerm}
            placeholder="Search To Don'ts"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Label
            htmlFor="search-input"
            onClick={() => setIsOpen(false)}
            className="text-input hover:text-primary active:text-primary transition-colors ease-out duration-150"
          >
            <Search size="1.25rem" />
          </Label>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SearchTodo;
