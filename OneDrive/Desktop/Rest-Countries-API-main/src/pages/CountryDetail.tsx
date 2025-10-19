import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Country {
  name: { common: string };
  flags: { png: string };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
}

export default function CountryDetail() {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      if (!name) return;

      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(
            name
          )}?fullText=true&fields=name,flags,population,region,subregion,capital`
        );

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();

        // Make sure it's an array with at least one country
        if (Array.isArray(data) && data.length > 0) {
          setCountry(data[0]);
        } else {
          setError("Country not found.");
        }
      } catch (err) {
        console.error("Failed to fetch country:", err);
        setError("Failed to load country data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) return <div className="p-8 text-center text-lg">Loading...</div>;
  if (error)
    return <div className="p-8 text-center text-lg text-red-500">{error}</div>;

  if (!country) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-white p-6">
      <Link
        to="/"
        className="inline-block mb-6 px-4 py-2 bg-white dark:bg-neutral-800 rounded shadow hover:scale-105 transition-transform"
      >
        &larr; Back
      </Link>

      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="w-full md:w-1/2 h-auto object-cover rounded shadow"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-extrabold mb-4">{country.name.common}</h1>
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Subregion:</span>{" "}
            {country.subregion || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {country.capital?.[0] || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
