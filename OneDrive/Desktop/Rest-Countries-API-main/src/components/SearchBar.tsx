import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-md flex-grow">
      <input
        type="text"
        placeholder="Search for a country…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 p-3 rounded-md shadow-sm border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-neutral-500
                   dark:bg-neutral-800 dark:text-white"
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300"
        size={20}
      />
    </div>
  );
}
