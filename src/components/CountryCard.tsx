import { Link } from "react-router-dom";

interface CountryCardProps {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital?: string;
}

export function CountryCard({
  flag,
  name,
  population,
  region,
  capital = "N/A",
}: CountryCardProps) {
  return (
    <Link
      to={`/country/${encodeURIComponent(name)}`}
      className="block bg-white dark:bg-blue-900 rounded-md overflow-hidden shadow-md transition-transform hover:scale-105"
    >
      <img
        src={flag}
        alt={`Flag of ${name}`}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-sm">
        <h2 className="text-lg font-extrabold mb-2 dark:text-white">{name}</h2>
        <p className="text-gray-800 dark:text-gray-100">
          <span className="font-semibold">Population:</span>{" "}
          {population.toLocaleString()}
        </p>
        <p className="text-gray-800 dark:text-gray-100">
          <span className="font-semibold">Continent:</span> {region}
        </p>
        <p className="text-gray-800 dark:text-gray-100">
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </Link>
  );
}
