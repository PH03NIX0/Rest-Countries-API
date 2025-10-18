import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { FilterDropdown } from "../components/FilterDropdown";
import { CountryCard } from "../components/CountryCard";

interface Country {
  name: { common: string };
  flags: { png: string };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
}

interface HomeProps {
  dark: boolean;
  toggleDarkMode: () => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  filteredCountries: Country[];
}

function Home({
  dark,
  toggleDarkMode,
  search,
  setSearch,
  region,
  setRegion,
  filteredCountries,
}: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-white">
      <Navbar dark={dark} toggleDarkMode={toggleDarkMode} />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <SearchBar value={search} onChange={setSearch} />
          <FilterDropdown value={region} onChange={setRegion} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
          {filteredCountries.map((country) => (
            <CountryCard
              key={country.name.common}
              flag={country.flags.png}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0] || "N/A"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
