interface FilterDropdownProps {
  value: string;
  onChange: (val: string) => void;
}

const subregions = [
  { label: "All", value: "All" },
  { label: "Africa", value: "Africa" },
  { label: "North America", value: "North America" },
  { label: "South America", value: "South America" },
  { label: "Europe", value: "Europe" },
  { label: "Oceania", value: "Oceania" },
  { label: "Antarctic", value: "Antarctic" },
];


export function FilterDropdown({ value, onChange }: FilterDropdownProps) {
  return (
    <div className="w-60">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 rounded-md shadow-sm border border-gray-300 
                   bg-white dark:bg-neutral-800 dark:text-gray-100 dark:border-neutral-700 
                   focus:outline-none"
      >
        <option value="All" disabled>
          Filter by continent
        </option>
        {subregions.map((region) => (
          <option key={region.value} value={region.value}>
            {region.label}
          </option>
        ))}
      </select>
    </div>
  );
}
