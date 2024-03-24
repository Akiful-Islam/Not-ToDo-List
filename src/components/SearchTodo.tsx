import { Filter } from "@/lib/data/types";
import React from "react";
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
  const onSearch = (searchTerm: string) => {
    setFilter({
      ...filter,
      searchTerm,
    });
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Search
          className="text-popover-foreground txt hover:bg-accent rounded-md transition-all duration-150 ease-out"
          size="1.25rem"
        />
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex items-center gap-4">
          <Label htmlFor="search-input">
            <Search size="1.25rem" className="text-input" />
          </Label>
          <Input
            id="search-input"
            defaultValue={filter.searchTerm}
            placeholder="Search To Don'ts"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SearchTodo;
