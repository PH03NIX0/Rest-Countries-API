import { SearchBar } from "./SearchBar";
import { FilterDropdown } from "./FilterDropdown";

interface SearchFilterBarProps {
  searchValue: string;
  onSearchChange: (val: string) => void;
  filterValue: string;
  onFilterChange: (val: string) => void;
}

export function SearchFilterBar({
  searchValue,
  onSearchChange,
  filterValue,
  onFilterChange,
}: SearchFilterBarProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-6 mb-6 flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <SearchBar value={searchValue} onChange={onSearchChange} />
      </div>
      <div>
        <FilterDropdown value={filterValue} onChange={onFilterChange} />
      </div>
    </div>
  );
}
